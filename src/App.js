import './App.css';
import { host } from './common/constants';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContext from './components/context/AuthContext';
import Landing from './components/Init/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login/Login';
import Driver from './components/Driver';
import RegDriverForm from './components/Forms/RegDriverForm';
import DriverDashboard from './components/DriverDashboard';
import Passenger from './components/Passenger';
import RegPassengerForm from './components/Forms/RegPassengerForm';
import PassengerDashboard from './components/Passenger/PassengerDashboard';
import PickRoute from './components/Route';
import NewSharedRoute from './components/Route/NewSharedRoute';
import SharedRoute from './components/Route/SharedRoute';
import AllRoutes from './components/Route/AllRoutes';
import Error from './components/Error/Error';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: '0',
      user: {},
      userType: '',
      onSubmitHandler: this.onSubmitHandler
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log(`App - OnSubmit fired for: ${e.target.username.value}`);

    // this.validateInputs(e);

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
        this.setState({ userType: e.target.id })
        sessionStorage.setItem('userId', user.id);
        sessionStorage.setItem('logged', true);
        sessionStorage.setItem('userType', e.target.id);
      });
  }

  //  TODO ---- validateInputs(e) {

  // }

  render() {
    return (
      <div className="App">
        <Header />
          <Error >
            <AuthContext.Provider value={{
              token: this.state.token,
              user: this.state.user,
              isLogged: this.state.isLogged,
              onSubmitHandler: this.onSubmitHandler
            }}>
              <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} exact /> :
              <Route path="/passenger" component={Passenger} exact />
                <Route path="/drivers" component={Driver} exact />
                <Route path="/drivers/register" component={RegDriverForm} />
                <Route path="/drivers/dashboard/:id" component={DriverDashboard} />
                <Route path="/routes/new" component={PickRoute} />
                <Route path="/routes/created" component={NewSharedRoute} />
                <Route path="/routes/all" component={AllRoutes} exact />
                <Route path="/routes/:id" component={SharedRoute} />
                <Route path="/passengers" component={Passenger} exact />
                <Route path="/passengers/register" component={RegPassengerForm} />
                <Route path="/passengers/dashboard/:id" component={PassengerDashboard} />
              </Switch>
            </AuthContext.Provider>
          </Error>
        <Footer />
      </div>
    )
  };
}


export default App;
