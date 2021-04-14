import './Passenger.css';
import LoginForm from '../Forms/LoginForm';
import PassengerDashboard from './PassengerDashboard';
import RegPassengerForm from '../Forms/RegPassengerForm';
import { Link } from 'react-router-dom';

const Passenger = ({
    match
}) => {

    if (sessionStorage.getItem('logged') == 'true') {    // ---- 'true' as string!!! ----
        return <PassengerDashboard userId={match.params.id} />;

    } else {
        return (
            <>
            <LoginForm />
            <Link to="/passengers/register" ><h4>Have no account yet! Sign up!</h4></Link>
            </>
        );
    }
}

export default Passenger;