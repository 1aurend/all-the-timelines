/** @jsxImportSource theme-ui */
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Splash from './views/Splash'
import GetData from './views/GetData'
import Firebase from './data/Firebase'


export default function AppRouter({ ready }) {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Splash ready={ready}/>
        </Route>
        <Route path='/:id'>
          <GetData ready={ready}/>
        </Route>
      </Switch>
    </Router>
  )
}


// <Route path='/:id'>
//   <GetData/>
// </Route>
