import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ResetPassword from './reset-password'

const List = () =>
  <ul>
    <li><Link to="/oy/reset-password">reset-password</Link></li>
  </ul>

const OyRouter = () =>
  <Router>
    <div>
      <Route exact path="/oy" component={List}/>
      <Route path="/oy/reset-password" component={ResetPassword}/>
    </div>
  </Router>

export default OyRouter
