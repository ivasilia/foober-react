import './Passenger.css';
import LoginForm from '../Forms/LoginForm';
import AuthContext from '../context/AuthContext';
import PassengerDashboard from './PassengerDashboard';
import { Link } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

const Passenger = ({
    match
}) => {

    const { user, setUser } = useState({});
    const context = useContext(AuthContext);


    if (sessionStorage.getItem('logged') === 'true' && sessionStorage.getItem('userType') === 'passenger') {    // ---- 'true' as string!!! ----
        return <PassengerDashboard userId={match.params.id} />;

    } else {
        return (
            <>
                <p>Passenger login</p>
                <div>
                    <form onSubmit={context.onSubmitHandler} id="passenger">
                        <div className="inputField">
                            <label htmlFor="username">Enter username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="inputField">
                            <label htmlFor="password">Enter password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="inputField">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <Link to="/passengers/register" ><h4>Have no account yet! Sign up!</h4></Link>
            </>
        );
    }
}

export default Passenger;