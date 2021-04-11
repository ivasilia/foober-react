import style from './Driver';
import { useState, useRouteMatch, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import DriverDashboard from '../../components/DriverDashboard';
import LoginForm from '../Forms/LoginForm';

const Driver = ({
    match
}) => {

    const context = useContext(AuthContext);

    if (sessionStorage.getItem('logged') == 'true') {    // ---- 'true' as string!!! ----
        return <DriverDashboard userId={match.params.id} />;

    } else {
        return <LoginForm />;
    }


}

// DriverLogin.contextType = AuthContext;

export default Driver;