import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { firebaseConfig } from './firebase.config'
import Router from '../Router'
import Splash from '../views/Splash'


export default function Firebase() {
  const [instance, setInstance] = useState(false)

  useEffect(() => {
    console.log('here')
    firebase.initializeApp(firebaseConfig)
    console.log(firebase.app().name)
    firebase.analytics()
    firebase.auth().onAuthStateChanged(() => {
      console.log(firebase.app())
      setInstance(true)
    })
    return () => firebase.app().delete()
  }, [])


  return <Router ready={instance}/>
}
