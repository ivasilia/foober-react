import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleApiKey } from '../../common/constants'
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: 8
    }
  };



  render() {
    // console.log(`Rendering point: ${this.props.origin.lat} ${this.props.center.lng}`);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApiKey }}
          defaultCenter={this.props.origin}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.props.origin.lat}
            lng={this.props.origin.lng}
            text="Origin"
          />
          <Marker
            lat={this.props.destination.lat}
            lng={this.props.destination.lng}
            text="Origin"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;