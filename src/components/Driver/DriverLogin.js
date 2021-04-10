import React from 'react';
import AuthContext from '../context/AuthContext';
import DriverDashboard from '../DriverDashboard/DriverDashboard';
import LoginForm from '../Forms/LoginForm';
import './Driver.css';

class DriverLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        console.log('Driver Login mounted: ');
        console.log(this.context);
    }


    render() {
        console.log('Driver Login render: ');
        console.log(this.context.token);
        console.log(sessionStorage.getItem('logged'));
        
        return (
            <> { 
            sessionStorage.getItem('logged') === 'true' ? (<DriverDashboard userId={this.props.id} />) : (<LoginForm />)
        } 
        </>);
    }
}

DriverLogin.contextType = AuthContext;

export default DriverLogin;