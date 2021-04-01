import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className="header">
                <li><Link to="/">home</Link></li>
                <li><Link to="/driver/dashboard">your dashboard</Link></li>
                <li><Link to="/routes/new">create route</Link></li>
                <li><Link to="/routes/all">all routes</Link></li>
                <li><Link to="/about">about foober</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">register</Link></li>
                <li><Link to="/logout">logout</Link></li>
            </ul>
        </div>
    );
}

export default Header;