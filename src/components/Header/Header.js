import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    function logout(e) {
        e.preventDefault();
        sessionStorage.setItem('logged', false)
    }

    return (
        <div>
            <ul className="header">
                <li><Link to="/">home</Link></li>
                <li><Link to="/driver">your dashboard</Link></li>
                <li><Link to="/routes/new">create route</Link></li>
                <li><Link to="/routes/all">all routes</Link></li>
                <li><Link to="/about">about foober</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">register</Link></li>
                <li><Link to="/driver" onClick={logout}>logout</Link></li>
            </ul>
        </div>
    );
}

export default Header;