const Airtable = require('airtable')
const functions = require('firebase-functions')
const curry = require('ramda').curry
const _ = require('ramda').__
const compose = require('ramda').compose
const map = require('ramda').map

const listRecordsAsync = curry(base => table => fields => {
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

const populateLinks = curry(base => table => field => record => {
  console.log('hello')
  return Promise.allSettled(
    record.fields[field].map(uid => (
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
  )
})
const populatePeople = populateLinks(_,'peopleList','people')

const lab3dFields = [
  'order',
  'people',
  'start',
  'end',
  'headline',
  'bodyText',
  'mediaLink',
  'mediaCaption'
]
const listLab3dRecords = listRecordsAsync(_,'Lab3D',lab3dFields)

const getTimelineData = async (table) => {
  const base = new Airtable({apiKey: functions.config().at.key})
    .base(functions.config().at.base)
  console.log(compose)
  const getCleanRecords = compose(map(populatePeople(base)),listRecordsAsync)
  console.log(getCleanRecords(base,'Lab3D',lab3dFields))
  const data = await listRecordsAsync(base, 'Lab3D', lab3dFields)
  console.log(data)
  return listRecordsAsync(base, 'Lab3D', lab3dFields)
}

module.exports = getTimelineData
