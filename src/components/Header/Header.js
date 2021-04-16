import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [ logged, setLogged ] = useState('');

    function logout(e) {
        // e.preventDefault();
        setLogged('false');
        sessionStorage.setItem('logged', false);
        sessionStorage.setItem('userId', '');
        sessionStorage.setItem('userType', '');
    }


    return (            // ---- TODO re-render on logout -----

        <div>
            <ul className="header">
                {
                    sessionStorage.getItem('logged') === 'false' || !sessionStorage.getItem('logged') ?
                        <li><Link to="/">home</Link></li> :
                        null
                }
                {
                    sessionStorage.getItem('logged') === 'true' ?
                        (<li><Link to={`/${sessionStorage.getItem('userType')}s`} >your dashboard</Link></li>) :
                        null
                }

                {
                    sessionStorage.getItem('logged') === 'true' ?
                        (<li><Link to="/routes/new">create route</Link></li>) :
                        null
                }
                <li><Link to="/routes/all">active routes</Link></li>
                <li><Link to="/about">about foober</Link></li>
                {/* {
                    sessionStorage.getItem('logged') === 'true' ?
                        null :
                        (<li><Link to="/login">login</Link></li>)
                } */}
                {/* {
                    sessionStorage.getItem('logged') === 'false' ?
                        (<li><Link to="/register">register</Link></li>)
                        :
                        null
                } */}
                {
                    sessionStorage.getItem('logged') === 'true' ?
                        (<li><Link to="/" onClick={logout}>logout</Link></li>) :
                        null
                }

            </ul>
        </div>
    );
}

export default Header;