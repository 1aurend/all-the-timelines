const Airtable = require('airtable')
const functions = require('firebase-functions')

const listRecordsAsync = (table, base) => {
  return new Promise((resolve, reject) => {
    base(table)
      .select({
        // fields: [ 'Name' ],
        fields: [
          'UpdateID',
          'Type',
          'Projects',
          'Start',
          'Stop',
          'Headline',
          'Text',
          'MediaLink',
          'MediaCredit',
          'MediaCaption',
          'People'
        ],
      })
      .all((err, records) => {
        if (err) {
          reject(err)
          }
        resolve(records)
      })
    })
}

const populateLinks = base => table => record => {
  return new Promise((resolve, reject) => {
    base(table)
      .find(record.fields.People[0], (err, record) => {
        if (err) {
          reject(err)
          }
        resolve(record)
      })
    })
}


const getTimelineData = (table) => {
  const base = new Airtable({apiKey: functions.config().at.key})
    .base(functions.config().at.base)
  return listRecordsAsync(table, base)
}

module.exports = getTimelineData
