/** @jsxImportSource theme-ui */
import firebase from 'firebase'
import { useState, useEffect } from 'react'

export default function Splash({ ready }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (ready) {
      console.log(firebase.app().name)
      firebase.functions().useEmulator("localhost", 5001)
      const firebaseTest = firebase.functions().httpsCallable('helloWorld')
      const fetch = async () => {
        const data = await firebaseTest()
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
