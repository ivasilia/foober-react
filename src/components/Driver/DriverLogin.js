import { useState } from 'react';
import { host } from '../../common/constants';
import './Driver.css';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const DriverLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [cookies, setCookie] = useCookies(['jwt']);

    async function onSubmit(values) {
        const response = await fetch(`${host}/api/login?username=${username}&password=${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        }});
    
        let expires = new Date()
        expires.setTime(expires.getTime() + (response.data.expires_in * 1000))
        setCookie('access_token', response.body.jwt, { path: '/',  expires})
        // setCookie('refresh_token', response.data.refresh_token, {path: '/', expires})
    }

    return (
        <div>
            <form>
                <label for="username">Enter username</label>
                <input type="text" id="username" name={setUsername} placeholder="-<>-" />
                <label for="password">Enter password</label>
                <input type="password" id="password" name={setPassword} placeholder="..." />
                <input type="submit" value="Submit" onSubmit={onSubmit}/>
            </form>
        </div>
    );
}

export default DriverLogin;