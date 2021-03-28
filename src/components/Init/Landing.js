import { Link } from 'react-router-dom';
import Init from './Init';

const Landing = () => {
    return (
        <div>
            <Link to="/driver"><Init text="DRIVER" /></Link>
            <Link to="/about"><p>Welcome to Foober. Read more...</p></Link>
            <Link to="/passenger"><Init text="PASSENGER" /></Link>
        </div>
    )
}

export default Landing;