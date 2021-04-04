import './DriverDashboard.css';
import { host } from '../../common/constants';
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class DriverDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: {
                id: 1,
                name: '',  
                model: '',
                fuel: '',
                consumption: 0
            },
            errors: [],
        }
    }

    componentDidMount() {
        const driverId = this.props.match.params.id;

        fetch(`${host}/drivers/${driverId}`)
            .then(res => res.json())
            .then(data => {
                this.setState( prevState => {
                    let driver = Object.assign({}, prevState.driver);
                    driver.id = data.id;
                    driver.name = data.name;
                    driver.model = data.model;
                    driver.fuel = data.fuel;
                    driver.consumption = data.consumption;
                    return driver;
                })
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
                        <p>Driver: {this.state.name}</p>
                        <p>Vehicle: {this.state.model}</p>
                        <p>Fuel: {this.state.fuel}</p>
                        <p>Overall consumption: {this.state.consumption}</p>
                    </div>
                    <div className="box">
                        <Link to="/routes/new"><button>Create new route</button></Link>
                        <Link to="/routes/:id"><button>Use existing route</button></Link>
                        <Link to="/routes/delete"><button>Delete all routes</button></Link>
                    </div>
                    <div className="box">
                        <p>Your last passengers:</p>
                        {/* {
                            this.state.driver.passengers.map(p => {
                                return <span>{p}</span>
                            })
                        } */}
                    </div>
                </section>
                <h4>Estimated travel cost with -- passengers: </h4>
            </div>
        );
    }
}

export default DriverDashboard;