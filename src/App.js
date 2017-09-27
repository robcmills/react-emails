import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './components/list'
import BCRouter from './bc/router'
import OyRouter from './oy/router'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="AppRouter">
          <Route exact path="/" component={List}/>
          <Route path="/bc" component={BCRouter}/>
          <Route path="/oy" component={OyRouter}/>
          <Route path="/mjml" component={() => <div>mjml</div>}/>
        </div>
      </Router>
    )
  }
}

export default App;
