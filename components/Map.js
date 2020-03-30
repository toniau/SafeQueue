import { Component } from 'react';
import MapGL from 'react-map-gl';
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
      <MapGL
				ref={this.mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
				<Geocoder
					mapRef={this.mapRef}
					onViewportChange={this.handleViewportChange}
					mapboxApiAccessToken={process.env.MAPBOX_KEY}
				/>
			</MapGL>
    );
  }
}

export default Map