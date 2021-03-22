import { Link } from 'react-router-dom';
import Init from './Init';

const Landing = () => {
    return (
        <div>
            <Link to="/driver"><Init text="DRIVER" /></Link>
            <p>Welcome to Foober</p>
            <Link to="/passenger"><Init text="PASSENGER" /></Link>
        </div>
    )
}

export default Landing;