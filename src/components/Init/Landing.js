import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Init from './Init';

const Landing = () => {

    useEffect(async () => {
        await sessionStorage.setItem('userType', '');
    }, []);

    return (
        <div>
            <Link to="/drivers"
            >
                <Init text="DRIVER" /></Link>
            <Link to="/about"><p>Welcome to Foober. Read more...</p></Link>
            <Link to="/passengers"
            >
                <Init text="PASSENGER" /></Link>
        </div>
    )
}

export default Landing;