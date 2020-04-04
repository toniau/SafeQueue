import { Component } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'

class Map extends Component {
  state = {
    viewport: {
      width: '90vw',
      height: '400px',
      latitude: 0,
      longitude: 0,
      zoom: 13
    }
  }

  componentDidMount = () =>{
    navigator.geolocation.getCurrentPosition(position => {
      const newViewport = {
        width: '90vw',
        height: '400px',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 13
      }
      this.setState({
        viewport: newViewport
      })
    })
  }

  // Handle response from geocoder
  handleOnResults = (event) => {
    
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
          mapRef={this.mapRef}
					positionOptions={{enableHighAccuracy: true}}
					showUserLocation={false}
				/>
				<Geocoder
          mapRef={this.mapRef}
          onViewportChange={this.handleViewportChange}
          onResults={this.handleOnResults}
          position='top-left'
					mapboxApiAccessToken={process.env.MAPBOX_KEY}
				/>
			</ReactMapGL>
    );
  }
}

export default Map