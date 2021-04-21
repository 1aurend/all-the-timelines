const functions = require("firebase-functions")
const getTimelineData = require('./fetch.js')

exports.getTimelineData = functions.https.onCall(async (data, context) => {
  console.log(data)
  const atData = await getTimelineData(data.table)
  // const formatted = formatJSON(fetched)
  return atData
})

exports.helloWorld = functions.https.onCall((data, context) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return "Hello from Firebase!"
});
