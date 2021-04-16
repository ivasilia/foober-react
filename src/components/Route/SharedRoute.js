import { host } from '../../common/constants';
import { Component } from 'react';
import './Route.css';

class SharedRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            origin: '',
            destination: '',
            distance: 0
        }
    }


    componentDidMount = async () => {
        let routeId = this.props.match.params.id;
        console.log(`Use effect fired with: ${routeId}`);

        await fetch(`${host}/routes/${routeId}`)
            .then(res => res.json())
            .then(data => {
                console.log(`Fetched route: ${data.id} ${data.origin}`);
                this.setState({ id: data.id });
                this.setState({ origin: data.origin });
                this.setState({ destination: data.destination });
                this.setState({ distance: data.distance });
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="new-shared-route" >
                <p><b>Shared Route Id nr: {this.state.id}</b></p>
                <p>{this.state.origin} - {this.state.destination}</p>
                <p>{this.state.distance} km</p>
                <button >Enter route</button>
            </div>
        );
    }

}


export default SharedRoute;