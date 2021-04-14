import { host } from '../../common/constants';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import './Route.css';

const AllRoutes = () => {
    const [routes, setRoutes] = useState([]);

    useLayoutEffect(() => {
        console.log(`Fetching all routes...`);
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
                                <Link to={`/routes/${r.id}`}>
                                    <div className="list-item">
                                        <p>{r.origin} - {r.destination}</p>
                                        <small>Distance: {r.distance} km, </small>
                                        <small>Passengers: </small>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllRoutes;