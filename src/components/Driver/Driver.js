import style from './Driver';
import { Link } from 'react-router-dom';
import Init from '../Init/Init';
import RegForm from './RegForm';

const Driver = () => {
    return(
        <div className="form-container">
            <Link to="/driver/login"><Init text="Have an account? Drive in!" /></Link>
            <p>Otherwise register:</p>
            <RegForm />
        </div>
    )
}

export default Driver;