import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    function logout(e) {
        // e.preventDefault();
        sessionStorage.setItem('logged', false)
    }


    return (

        <div>
            <ul className="header">
                <li><Link to="/">home</Link></li>
                {
                    sessionStorage.getItem('logged') === 'true' ?
                        (<li><Link to="/driver">your dashboard</Link></li>) :
                        null
                }

                {
                    sessionStorage.getItem('logged') === 'true' ?
                        (<li><Link to="/routes/new">create route</Link></li>) :
                        null
                }
                <li><Link to="/routes/all">all routes</Link></li>
                <li><Link to="/about">about foober</Link></li>
                {
                    sessionStorage.getItem('logged') === 'true' ?
                        null :
                        (<li><Link to="/login">login</Link></li>)
                }
                {
                    sessionStorage.getItem('logged') === 'true' ?
                        null
                        :
                        (<li><Link to="/register">register</Link></li>)
                }
                {
                    sessionStorage.getItem('logged') === 'true' ?
                        (<li><Link to="/driver" onClick={logout}>logout</Link></li>) :
                        null
                }

            </ul>
        </div>
    );
}

export default Header;