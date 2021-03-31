import './Route.css';

const NewSharedRoute = (props) => {

    // ------------- TODO createRoute request here with passengers init ---------
    return (
        <div className="new-shared-route">
            <p><b>Newly created shared Route</b></p>
            <p>{props.location.origcity} - {props.location.destcity}</p>
            <p>{props.location.distance} km</p>
        </div>
    )
}

export default NewSharedRoute;