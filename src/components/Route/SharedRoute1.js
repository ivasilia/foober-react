import GMap from './Map';
import './Route.css';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { host, googleDistanceMatrixUrl, townsReqUrl } from '../../common/constants';
import NewSharedRoute from './NewSharedRoute';


const SharedRoute = () => {

    const [towns, setTowns] = useState([]);
    const [origin, setOrigin] = useState({
        lat: 48.20,
        lng: 16.37
    });
    const [destination, setDestination] = useState(
        {
            lat: 60.36,
            lng: 15.63
        })
    const [origcity] = useState('');
    const [destcity] = useState('');
    const [distance] = useState(0);
    const [count] = useState(0);

    useEffect(() =>
        fetch(townsReqUrl)
            .then(res => res.json())
            .then(data => {
                this.setTowns(data);
            })
            .catch(err => console.log(err))
    );

    return (
        <div className="route">
            <h2>Pick your route</h2>
            <select name="town-origin" onChange={this.handleChange}>
                <option disabled defaultValue="Select city">Select city</option>
                {
                    this.state.towns.map(t => {
                        return (
                            <option
                                key={`${t.lat}+${t.lng}+${t.city}`}
                                // lat={t.lat}
                                // lng={t.lng}
                                value={`${t.lat}|${t.lng}|${t.city}`}>
                                {t.city}
                            </option>
                        )
                    })
                }
            </select>
            <Switch>
                <Route path="/">
                    <Link to="/routes/created"
                        origin={this.state.origin}
                        desination={this.state.destination}
                        origcity={this.state.origcity}
                        destcity={this.state.destcity}>
                        <button onClick={this.calcRoute} className="btn">Create route</button>
                    </Link>
                    <GMap
                        origin={this.state.origin}
                        destination={this.state.destination}
                    />
                </Route>
                <Route path="/created">
                    <NewSharedRoute />
                </Route>
            </Switch>
        </div>
    )
}


    handleChange(e) {
        
        let geoPoint = e.target.value.split('|');
        let lat = geoPoint[0];
        let lng = geoPoint[1];
        let city = geoPoint[2];
        console.log(city);

        this.setState({ count: this.state.count + 1 });

        if (this.state.count > 0) {
            this.setState({ destination: { lat: lat, lng: lng }});
            this.setState({ destcity: city });
            this.setState({ count: 0 });
            console.log(`Count should be > 0 (${this.state.count}). Origin: ${this.state.origin}, Dest: ${this.state.destination}`);

        } else {
            this.setState({ origin: { lat: lat, lng: lng }});
            this.setState({ origcity: city });
            console.log(`Count should be 0 (${this.state.count})`);
        }

    }


    // async calcRoute() {
    //     let orig = `${this.state.origin.lat},${this.state.origin.lng}`;
    //     let dest = `${this.state.destination.lat},${this.state.destination.lng}`;
    //     console.log(`${this.state.origcity} - ${this.state.destcity}`);

    //     const distance = await fetch(
    //         `${googleDistanceMatrixUrl}origin=${orig}&destination=${dest}`,
    //     )
    //         .then(res => res.json())
    //         .then(data => { 
    //             let rows = data.rows[0];
    //             data = rows.elements[0].distance.value;
    //             console.log(data);
    //             return data;
    //         })
    //         .then(data => this.setState({ distance: data }));
    //     console.log(`state.distance: ${this.state.distance}`);

    //     this.createRoute();
    //     return distance;
    // }


    // async createRoute() {
    //     const response = await fetch(`${host}/routes/create`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             distance: this.state.distance
    //         })
    //     });
    //     return response;
    // }


    // render() {
    //     return (
    //         <div className="route">
    //             <h2>Pick your route</h2>
    //             <select name="town-origin" onChange={this.handleChange}>
    //                 <option disabled defaultValue="Select city">Select city</option>
    //                 {
    //                     this.state.towns.map(t => {
    //                         return (
    //                             <option
    //                                 key={`${t.lat}+${t.lng}+${t.city}`}
    //                                 // lat={t.lat}
    //                                 // lng={t.lng}
    //                                 value={`${t.lat}|${t.lng}|${t.city}`}>
    //                                 {t.city}
    //                             </option>
    //                         )
    //                     })
    //                 }
    //             </select>
    //             <Switch>
    //                 <Route path="/">
    //                     <Link to="/routes/created"
    //                         origin={this.state.origin}
    //                         desination={this.state.destination}
    //                         origcity={this.state.origcity}
    //                         destcity={this.state.destcity}>
    //                         <button onClick={this.calcRoute} className="btn">Create route</button>
    //                     </Link>
    //                     <GMap
    //                         origin={this.state.origin}
    //                         destination={this.state.destination}
    //                     />
    //                 </Route>
    //                 <Route path="/created">
    //                     <NewSharedRoute />
    //                 </Route>
    //             </Switch>
    //         </div>
    //     )
    }


export default SharedRoute;