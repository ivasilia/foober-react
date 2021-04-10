import '../Driver/Driver.css';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const LoginForm = () => {

    const context = useContext(AuthContext);

    return (
        <div>
            <p>{context.token}</p>
            <form onSubmit={context.onSubmitHandler}>
                <label htmlFor="username">Enter username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Enter password</label>
                <input type="password" id="password" name="password" />
                {/* <Link to="/driver"> */}
                    <input type="submit" value="Submit" />
                {/* </ Link> */}
            </form>
        </div>
    );
}

// LoginForm.contextType = AuthContext;


export default LoginForm;