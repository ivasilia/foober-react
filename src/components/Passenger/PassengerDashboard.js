import './Passenger.css';
import { Component } from 'react';
import { host } from '../../common/constants';
import { Link, NavLink } from 'react-router-dom';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import AuthContext from '../context/AuthContext';


class PassengerDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passenger: {
                id: 1,
                name: '',
                imageurl: '',
                registrationDate: '',
                bonusPoints: 0
            },
            errors: [],
        }
    }


    componentDidMount() {
        let passengerId = sessionStorage.getItem('userId');
        console.log(`Passenger Dashboard loading for: ${passengerId}`);
        sessionStorage.setItem('userType', 'passenger');       // ---- Set user type after login: passenger

        fetch(
            `${host}/passengers/${passengerId}`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState(prevState => {
                    let passenger = Object.assign({}, prevState.passenger);
                    passenger.id = data.id;
                    passenger.name = data.name;
                    passenger.imageUrl = data.imageUrl;
                    return passenger;
                })
            })
            .catch(err =>
                this.setState(err => this.state.errors.push(err))
            )
    }


    render() {
        return (
            <div className="dashboard">
                <h2>Foober Passenger's Dashboard</h2>
                <section>
                    <div className="box">
                        <p>Passenger: {this.state.name}</p>
                        <p>First registration: {this.state.registrationDate}</p>
                        <p>Bonus points: { this.state.bonusPoints}</p>
                    </div>
                    <div className="box">
                        <Link to="/routes/all"><button>Pick avaiable route</button></Link>

                    </div>
                    <div className="box">
                        <p>Your last drivers:</p>
                        {/* {
                        this.state.driver.passengers.map(p => {
                            return <span>{p}</span>
                        })
                    } */}
                    </div>
                    <div className="oval-div">
                        <Image
                            cloudName="duvtwfpom"
                            publicId={this.state.imageUrl}
                            width="150" height="150" gravity="face" crop="scale" >
                        </Image>
                    </div>
                </section>
            </div>
        );
    }
}

PassengerDashboard.contextType = AuthContext;

export default PassengerDashboard;