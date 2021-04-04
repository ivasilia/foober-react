import { useEffect, useState } from 'react';
import { host } from '../../common/constants';
import DriverLogin from '../Driver/DriverLogin';
import style from './RegForm.css';

const RegForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [model, setModel] = useState('');
    const [fuel, setFuel] = useState('');
    const [consumption, setConsumption] = useState('');

    // TODO ---- 

    async function registerDriver() {
        await fetch(`${host}/drivers/register?
            username=${props.location.username}
            &password=${props.location.password}
            &model=${props.location.model}
            &fuel=${props.location.fuel}
            &consumption=${props.location.consumption}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => console.log(data));
    }

    return (
        <form onSubmit={registerDriver}>
            <div className={style.inputField}>
                <label htmlFor="username">Username</label>
                <input id="username" name={setUsername} type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name={setPassword} type="password" />
            </div>
            <div>
                <label htmlFor="rePassword">Retype password</label>
                <input id="rePassword" name={setRePassword} type="password" />
            </div>
            <div className={style.inputField}>
                <label htmlFor="model">Car model</label>
                <input id="model" name={setModel} type="text" />
            </div>
            <div className={style.inputField}>
                <label htmlFor="fuel">Fuel</label>
                <input id="fuel" name={setFuel} type="text" />
            </div>
            <div className={style.inputField}>
                <label htmlFor="consumption">Consumption</label>
                <input id="consumption" name={setConsumption} type="text" />
            </div>
            <div>
                <label htmlFor="submit-button">Register</label>
                <input id="submit-button" type="submit" className="submitButton" />
            </div>
        </form>
    )
}

export default RegForm;