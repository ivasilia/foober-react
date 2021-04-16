import Driver from '../Driver';
import Passenger from '../Passenger';

const Login = () => {

    let userType = sessionStorage.getItem('userType');

    if(userType === 'driver') {
        return (
            <Driver />
        )
    } else if(userType === 'passenger') {
        return (
            <Passenger />
        )
    } else {
        console.log(`Unknown user type: ${userType}`);
    }
}

export default Login;