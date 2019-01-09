import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Page from './Page'
import SpecificPage from './SpecificPage';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/page" component={Page} />
            <Route exact path="/page/:id" component={SpecificPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
