import './App.css';
import { host } from './common/constants';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContext from './components/context/AuthContext';
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

import Login from './components/Login/Login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: '',
      user: {},
      onSubmitHandler: this.onSubmitHandler
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }


  onSubmitHandler(e) {
    e.preventDefault();
    console.log(`App - OnSubmit fired for: ${e.target.username.value}`);
    fetch(`${host}/api/login?username=${e.target.username.value}&password=${e.target.password.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        let jwt = data.jwt;
        let user = data.user;
        this.setState({ token: jwt });
        this.setState({ user: user });
        sessionStorage.setItem('userId', user.id);
        sessionStorage.setItem('logged', true);
      });

      console.log('App - onSubmitHandler done. Logged in: ');
      console.log(this.state.isLogged);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AuthContext.Provider value={{
          token: this.state.token,
          user: this.state.user,
          isLogged: this.state.isLogged,
          onSubmitHandler: this.onSubmitHandler
        }}>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/about" component={About} />
            <Route path="/driver" component={Driver } exact />
            <Route path="/passenger" component={Passenger} exact />
            <Route path="/login" id={this.state.user.id} component={Driver} exact />
            <Route path="/login/test-login" component={Login} />
            <Route path="/driver/login" component={DriverLogin} exact />
            <Route path="/driver/dashboard/:id" component={DriverDashboard} />
            <Route path="/routes/new" component={SharedRoute} />
            <Route path="/routes/created" component={NewSharedRoute} />
            <Route path="/routes/all" component={AllRoutes} exact />
            <Route path="/passenger/dashboard" component={PassengerDashboard} />
          </Switch>
        </AuthContext.Provider>
        <Footer />
      </div>
    )
  };
}


export default App;
