import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Link, NavLink, Switch, Router } from 'react-router-dom';
import Landing from './components/Init/Landing';
import Driver from './components/Driver';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/driver" component={Driver} />
          {/* <Route path="/passenger" component={Passenger} /> */}
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }


}


export default App;
