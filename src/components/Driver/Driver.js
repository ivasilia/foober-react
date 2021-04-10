import style from './Driver';
import { host } from '../../common/constants';
import { useState, useRouteMatch, useContext } from 'react';
// import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import RegForm from '../RegForm';
import AuthContext from '../context/AuthContext';
import DriverLogin from './DriverLogin';
import NewSharedRoute from '../../components/Route/NewSharedRoute';
import DriverDashboard from '../../components/DriverDashboard';
import LoginForm from '../Forms/LoginForm';
import SharedRoute from '../../components/Route';

const Driver = ({
    match
}) => {

    const context = useContext(AuthContext);

    console.log('Here Driver:');
    console.log(context);
    console.log(match);

    if (sessionStorage.getItem('logged') == 'true') {    // ---- 'true' as string!!! ----
        return <DriverDashboard userId={match.params.id} />;

    } else {
        return <LoginForm />;
    }


}

// DriverLogin.contextType = AuthContext;

export default Driver;