import GMap from './Map';
import './Route.css';
import { Component } from 'react';
import Marker from './Marker';

class Route extends Component {

    constructor(props) {
        super(props);
        this.state = {
            towns: [],
            origin: {
                lat: 47.82,
                lng: 16.25
            },
            destination: {
                lat: 0,
                lng: 0
            },
            count: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://simplemaps.com/static/data/country-cities/at/at.json')
            .then(res => res.json())
            .then(data => {
                this.setState({ towns: data });
            })
            .catch(err => console.log(err))
    }

    handleChange(e) {
        let geoPoint = e.target.value.split('|');
        let lat = Number(geoPoint[0]);
        let lng = Number(geoPoint[1]);

        this.setState({ count: this.state.count + 1 });

        if (this.state.count > 0) {
            this.setState({ destination: { lat: lat, lng: lng } });
            this.setState({ count: 0 });
            

        } else {
            this.setState({ origin: { lat: lat, lng: lng } });
        }
    }


    render() {
        return (
            <div className="route">
                <h2>Pick your route</h2>
                <select name="town-origin" onChange={this.handleChange}>
                    {
                        this.state.towns.map(t => {
                            return (
                                <option
                                    key={`${t.lat}+${t.lng}+${t.city}`}
                                    // lat={t.lat}
                                    // lng={t.lng}
                                    value={`${t.lat}|${t.lng}`}>
                                    {t.city}
                                </option>
                            )
                        })
                    }
                </select>
                <GMap
                    center={this.state.origin}
                    origin={this.state.origin}
                    destination={this.state.destination} 
                />
            </div>
        )
    }
}

export default Route;