import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { firebaseConfig } from './firebase.config'
import Router from '../Router'


export default function Firebase() {
  const [instance, setInstance] = useState(false)

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
    firebase.auth().onAuthStateChanged(() => {
      setInstance(true)
    })
    return () => firebase.app().delete()
  }, [])

  return <Router ready={instance}/>
}
