import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/driver/dashboard">Your dashboard</Link></li>
                <li><Link to="/routes/new">Create route</Link></li>
                <li><Link to="/routes/all">All routes</Link></li>
                <li><Link to="/about">About Foober</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Header;