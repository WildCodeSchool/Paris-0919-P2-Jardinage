import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './components/Home'
import Garden from './components/Garden'
import Board from './components/Board'
import Alerts from './components/Alerts'
import NotFound from './components/NotFound'


class App extends React.Component {
  // componentDidMount() {
  //   fetch('http://localhost:/3000/')
  //     .then(response => console.log(response))
  // }
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/garden" component={Garden} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/alerts" component={Alerts} />
            <Route component={NotFound}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
