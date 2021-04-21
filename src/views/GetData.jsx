/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Suspense } from 'react'
import MainLine from './MainLine'
import firebase from 'firebase'


export default function GetData({ ready }) {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    if (ready) {
      firebase.functions().useEmulator("localhost", 5001)
      const atTest = firebase.functions().httpsCallable('getTimelineData')
      const fetch = async () => {
        const atData = await atTest({table: id})
        setData(atData.data)
      }
      fetch()
    }
  }, [ready, id])


  return (
    <Suspense fallback={'Loading...'}>
      {JSON.stringify(data, null, 2)}
    </Suspense>
)
}
