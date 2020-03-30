import { Component } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'

class Map extends Component {
  state = {
    viewport: {
      width: '90vw',
      height: '400px',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
    }
	}
	
	mapRef = React.createRef()

  render() {
    return (
      <ReactMapGL
				ref={this.mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
				<GeolocateControl
					positionOptions={{enableHighAccuracy: true}}
					showUserLocation="false"
				/>
				<Geocoder
					mapRef={this.mapRef}
					onViewportChange={this.handleViewportChange}
					mapboxApiAccessToken={process.env.MAPBOX_KEY}
				/>
			</ReactMapGL>
    );
  }
}

export default Map