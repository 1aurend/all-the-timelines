/** @jsxImportSource theme-ui */
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Splash from './views/Splash'
import GetData from './views/GetData'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Splash/>
        </Route>
        <Route path='/:id'>
          <GetData/>
        </Route>
      </Switch>
    </Router>
  )
}
