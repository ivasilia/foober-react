import { host } from '../../common/constants';
import { useState, useEffect, useLayoutEffect } from 'react';
import './Route.css';

const AllRoutes = () => {
    const [ routes, setRoutes ] = useState([]);

    useLayoutEffect(() => {
        (async () => {
        const result = await fetch(`${host}/routes/all`)
        .then(res => res.json())
        .then(data => setRoutes(data))
        .catch(err => console.log(err)
        );
        })();
    }, []);

    // TODO ---- Fix history return with data ----

    return (
        <div >
            <p>Here all active shared routes. Pick one!</p>
            <ul className="all-routes-wrapper">
            {
                routes.map(r => {
                    return (
                        <li key={r.id}>
                            <div className="list-item">
                            <p>{r.origin} - {r.destination}</p>
                            <small>Distance: {r.distance} km, </small>
                            <small>Passengers: </small>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default AllRoutes;