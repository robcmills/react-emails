import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ResetPassword from './reset-password'

const List = () =>
  <ul>
    <li><Link to="/bc/reset-password">reset-password</Link></li>
  </ul>

const BCRouter = () =>
  <Router>
    <div id='BCRouter'>
      <Route exact path="/bc" component={List}/>
      <Route path="/bc/reset-password" component={ResetPassword}/>
    </div>
  </Router>

export default BCRouter
