import style from './Driver';
import DriverDashboard from '../../components/DriverDashboard';
import LoginForm from '../Forms/LoginForm';
import { Link } from 'react-router-dom';

const Driver = ({
    match
}) => {

    if (sessionStorage.getItem('logged') == 'true' && sessionStorage.getItem('userType') === 'driver') {    // ---- 'true' as string!!! ----
        return <DriverDashboard userId={match.params.id} />;

    } else {
        return (
            <>
            <p>Driver login</p>
            <LoginForm userType="driver" />
            <Link to="/drivers/register" ><h4>Have no account yet! Sign up!</h4></Link>
            </>
        );
    }


}

// DriverLogin.contextType = AuthContext;

export default Driver;