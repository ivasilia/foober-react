import './Passenger.css';
import { Link, NavLink } from 'react-router-dom';


const PassengerDashboard = () => {



    return (
        <div className="dashboard">
            <h2>Foober Passenger's Dashboard</h2>
            <section>
                <div className="box">
                    <p>Passenger: </p>
                    <p>First registration: </p>
                    <p>Bonus points: </p>
                </div>
                <div className="box">
                    <Link to="/routes/:id"><button>Pick avaiable route</button></Link>
                    
                </div>
                <div className="box">
                    <p>Your last drivers:</p>
                    {/* {
                        this.state.driver.passengers.map(p => {
                            return <span>{p}</span>
                        })
                    } */}
                </div>
            </section>
        </div>
    );
}

export default PassengerDashboard;