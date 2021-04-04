import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Landing from './components/Init/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import About from './components/About';
import Driver from './components/Driver';
import DriverLogin from './components/Driver/DriverLogin';
import DriverDashboard from './components/DriverDashboard';
import Passenger from './components/Passenger';
import PassengerDashboard from './components/Passenger/PassengerDashboard';
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
          <Route path="/about" component={About} />
          <Route path="/driver" component={Driver} exact />
          <Route path="/driver/login" component={DriverLogin} exact />
          <Route path="/driver/dashboard/:id" component={DriverDashboard} />
          <Route path="/routes/new" component={SharedRoute} />   
          <Route path="/routes/created" component={NewSharedRoute} />                    
          <Route path="/routes/all" component={AllRoutes} exact />
          <Route path="/passenger" component={Passenger} exact/>
          <Route path="/passenger/dashboard" component={PassengerDashboard} />
        </Switch>
        <Footer />
      </div>
    );
  }


}


export default App;
