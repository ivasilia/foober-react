import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Landing from './components/Init/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Driver from './components/Driver';
import DriverDashboard from './components/DriverDashboard';
import Passenger from './components/Passenger';
import SharedRoute from './components/Route';
import NewSharedRoute from './components/Route/NewSharedRoute';
import AllRoutes from './components/Route/AllRoutes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header / >
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/login" component={Driver} />
          <Route path="/driver" component={Driver} exact />
          <Route path="/driver/dashboard/:id" component={DriverDashboard} />
          <Route path="/routes/new" component={SharedRoute} />   
          <Route path="/routes/created" component={NewSharedRoute} />                    
          <Route path="/routes/all" component={AllRoutes} exact />
          <Route path="/passenger" component={Passenger} exact/>
          <Route path="/passenger/dashboard" component={Passenger} />
        </Switch>
        <Footer />
      </div>
    );
  }


}


export default App;
