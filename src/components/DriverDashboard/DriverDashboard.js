import './DriverDashboard.css';
import constants from '../../common/constants';
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Footer';

class DriverDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: {
                id: '',
                name: '',
                car: {},
                passengers: []
            },
            errors: [],
        }
    }

    componentDidMount() {
        console.log(`params.id received: ${this.props.match.params.id}`);
        fetch(`${constants}/drivers/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ driver: data })
            })
            .catch(err =>
                this.setState(err => this.state.errors.push(err))
            )
    }



    render() {
        return (
            <div className="dashboard">
                <h2>Foober Driver's Dashboard</h2>
                <section>
                    <div className="box">
                        <p>Driver: {this.state.driver.name}</p>
                        {/* <p>{this.state.driver.name}</p> */}
                        <p>Vehicle: {this.state.driver.car.model}</p>
                        <p>Fuel: {this.state.driver.car.fuel}</p>
                        <p>Overall consumption: {this.state.driver.car.consumption}</p>
                    </div>
                    <div className="box">
                        <Link to="/routes/new"><button>Create new route</button></Link>
                        <Link to="/routes/:id"><button>Use existing route</button></Link>
                        <Link to="/routes/delete"><button>Delete all routes</button></Link>
                    </div>
                    <div className="box">
                        <p>Your last passengers:</p>
                        {
                            this.state.driver.passengers.map(p => {
                                return <span>{p}</span>
                            })
                        }
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default DriverDashboard;