import './Passenger.css';
import Init from '../Init/Init';
import RegForm from '../RegForm';
import { Link } from 'react-router-dom';

const Passenger = () => {
    return (
        <div className="form-container">
            <Link to="/routes/all"><Init text="Have an account? Pick an available route!" /></Link>
            <p>Otherwise register:</p>
            <RegForm />
        </div>
    )
}

export default Passenger;