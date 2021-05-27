const Airtable = require('airtable')
const functions = require('firebase-functions')
const curry = require('ramda').curry
const _ = require('ramda').__
const compose = require('ramda').compose
const map = require('ramda').map
const prop = require('ramda').prop
const fieldsMasterList = require('./fields')

const then =
  curry((f, p) => p.then(f))

const listRecordsAsync = curry((base, table, fields) => {
  console.log('test')
  return new Promise((resolve, reject) => {
    base(table)
      .select({
        fields: fields,
      })
      .all((err, records) => {
        if (err) {
          reject(err)
          }
        resolve(records)
      })
    })
})

const populateLinks = curry((base, table, field, targetField, record) => {
  return record[field]
    ? Promise.all(
        record[field].map(uid => (
          new Promise((resolve, reject) => {
            base(table)
              .find(uid, (err, record) => {
                if (err) {
                  reject(err)
                }
                resolve(record)
              })
          })
        ))
      ).then(data => {
        const values = data.map(item => item.fields[targetField])
        return {...record, [field]: values}
      })
    : Promise.resolve(record)
})
const populatePeople = populateLinks(_,'peopleList','people','Name')

const timelinesBase = new Airtable({apiKey: functions.config().at.key})
  .base(functions.config().at.base)
const listTimelineRecords = listRecordsAsync(timelinesBase)
const addPeopleToTimelineRecords = populatePeople(timelinesBase)

const getCleanRecords = compose(
  then(map(addPeopleToTimelineRecords)),
  then(map(prop('fields'))),
  listTimelineRecords
)

const getTimelineData = async (table) => {
  return Promise.all(
    await getCleanRecords(table, fieldsMasterList[table]))
      .then(data => {return data})
}

module.exports = getTimelineData
