import { host } from '../../common/constants';
import { useState, useEffect } from 'react';
import './Route.css';

const AllRoutes = () => {
    const [ routes, setRoutes ] = useState();

    useEffect(async () => {
        const result = await fetch(`${host}/routes/all`)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => setRoutes(result))
        .catch(err => console.log(err));
    });
    
    return (
        <div>
            <p>Here all active shared routes:</p>
        </div>
    )
}

export default AllRoutes;