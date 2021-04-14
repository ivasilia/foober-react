import { host } from '../../common/constants';
import { useEffect, useState } from 'react';
import './Route.css';

const SharedRoute = (props) => {
    console.log(props.location.origcity);

    const { data, setData } = useState([]);

    // ------------- TODO fix returning route ID (request successful, entity being created) ---------
    useEffect(async () => {
        fetch(`${host}/routes/create?origin=${props.location.origcity}&destination=${props.location.destcity}&distance=${props.location.distance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);


return (
    <div className="new-shared-route">
        <p><b>Newly created shared Route</b></p>
        <p>{props.location.origcity} - {props.location.destcity}</p>
        <p>{props.location.distance} km</p>
    </div>
);

    }


export default SharedRoute;