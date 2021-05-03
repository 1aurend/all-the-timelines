import * as React from 'react'
import ReactDOM from 'react-dom'
import Firebase from './data/Firebase'
import reportWebVitals from './reportWebVitals'
import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <Firebase />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
