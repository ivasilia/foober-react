import { useState } from 'react';
import { host } from '../../common/constants';
import Passenger from '../Passenger';
import { Redirect } from 'react-router-dom';
import style from './Form.css';
import PassengerDashboard from '../Passenger/PassengerDashboard';

const RegPassengerForm = (props) => {
    const [id, setId] = useState('');


    function registerPassenger(e) {
        // e.preventDefault();
        console.log(`Register passenger fired for: ${e.target.username.value}`);

        fetch(`${host}/passengers/register?username=${e.target.username.value}&password=${e.target.password.value}&imageUrl=${e.target.imageUrl.value}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            // .then(res => res.json())    
            .then(data => {                         // ------ TODO fix id receiving from response ---------
                console.log(`Data received: ${data}`);
                setId(data);
            });
    }

    if (id) {
        return (
            // <Redirect to="/passenger" />
            <Passenger />
        )
    } else {
        return (
            <form onSubmit={registerPassenger}>
                <div className={style.inputField}>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
                <div>
                    <label htmlFor="rePassword">Retype password</label>
                    <input id="rePassword" name="rePassword" type="password" />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input id="imageUrl" name="imageUrl" type="text" />
                </div>
                <div>
                    <label htmlFor="submit-button">Register</label>
                    <input id="submit-button" type="submit" className="submitButton" />
                </div>
            </form>
        )
    }
}

export default RegPassengerForm;