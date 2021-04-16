import './Form.css';
import AuthContext from '../context/AuthContext';
import { useContext, useEffect, useState } from 'react';

const LoginForm = (props) => {

    const context = useContext(AuthContext);

    return (
        <div>
            <form onSubmit={context.onSubmitHandler} id={props.userType}>
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
    );
}


export default LoginForm;