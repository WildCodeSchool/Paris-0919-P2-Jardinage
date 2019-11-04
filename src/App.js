import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './components/Home'
import PlantDetails from './components/PlantDetails'

class App extends React.Component {
  // componentDidMount() {
  //   fetch('http://localhost:/3000/')
  //     .then(response => console.log(response))
  // }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/plants/:handle' component={PlantDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
