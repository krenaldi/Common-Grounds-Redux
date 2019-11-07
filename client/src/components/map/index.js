import React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { mapLogic } from '../../utils/latlon';

const Token = "pk.eyJ1Ijoia3V0dGE5NiIsImEiOiJjazJoMzRmbmQxMWd2M2V0ODNheGI3OGppIn0.VbZuagXbuH8he6i7Oky_fQ"
class Map extends React.Component {

  state = {
    viewport: {
      width: '96vw',
      height: '50vh',
      latitude: 40.535434,
      longitude: -74.521286,
      zoom: 11
    }
  };
  componentDidMount() {
    mapLogic((coords) => {
      const viewport = this.state.viewport;
      viewport.latitude = coords.midLat;
      viewport.longitude = coords.midLon;
      this.setState({
        viewport,
      })
      console.log(coords)
    })
  }


  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={Token}
        mapStyle="mapbox://styles/kutta96/ck2h6j42g188b1cp3kz40wo5z"
            {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <div style={{position: 'absolute', right: 10, top: 5}}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    );
  }
}

export default Map