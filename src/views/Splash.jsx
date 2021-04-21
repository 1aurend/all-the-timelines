/** @jsxImportSource theme-ui */
import firebase from 'firebase'
import { useState, useEffect } from 'react'

export default function MainLine({ ready }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (ready) {
      firebase.functions().useEmulator("localhost", 5001)
      const firebaseTest = firebase.functions().httpsCallable('helloWorld')
      const atTest = firebase.functions().httpsCallable('getTimelineData')
      const fetch = async () => {
        const data = await firebaseTest()
        const atData = await atTest({table: 'Pokémon'})
        console.log(data.data)
        console.log(atData.data)
        setData(data.data)
      }
      fetch()
    }
  }, [ready])

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
