import style from './Driver';
import { useState, useRouteMatch, useContext } from 'react';
import DriverDashboard from '../../components/DriverDashboard';
import LoginForm from '../Forms/LoginForm';
import { Link } from 'react-router-dom';

const Driver = ({
    match
}) => {

    if (sessionStorage.getItem('logged') == 'true') {    // ---- 'true' as string!!! ----
        return <DriverDashboard userId={match.params.id} />;

    } else {
        return (
            <>
            <LoginForm />
            <Link to="/drivers/register" ><h4>Have no account yet! Sign up!</h4></Link>
            </>
        );
    }


}

// DriverLogin.contextType = AuthContext;

export default Driver;