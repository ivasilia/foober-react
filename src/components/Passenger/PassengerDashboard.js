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
            driver: {
                id: 1,
                name: '',
                imageurl: '',
                model: '',
                fuel: '',
                consumption: 0
            },
            errors: [],
        }
    }


    componentDidMount() {
        let passengerId = sessionStorage.getItem('userId');
        console.log(`Passenger Dashboard loading for: ${passengerId}`);

        fetch(
            `${host}/passengers/${passengerId}`
        )
            .then(res => res.json())
            .then(data => {
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
                        <p>Passenger: </p>
                        <p>First registration: </p>
                        <p>Bonus points: </p>
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
                    <div className="box">
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