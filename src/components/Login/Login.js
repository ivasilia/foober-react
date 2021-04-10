import { useState } from "react";
import React from 'react';
import { host } from '../../common/constants';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(`OnSubmit fired for: ${e.target.username.value}`);
        fetch(`${host}/api/login?username=${e.target.username.value}&password=${e.target.password.value}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => console.log(data));
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Enter username</label>
            <input type="text" id="username" name={setUsername} />
            <label htmlFor="password">Enter password</label>
            <input type="password" id="password" name={setPassword} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Login;