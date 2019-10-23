import React from "react";
import axios from 'axios';
import { geolocated } from "react-geolocated";

class Demo extends React.Component {
  state = {
    locationReversed: [],
  }

  componentDidMount() {
    axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=2.37&lat=48.845`).then(res => {
      const locationReversed = res.data;
      this.setState({ locationReversed: [locationReversed] });
      console.log(this.state.locationReversed)
    })
  }

  render() {
    let lat;
    let long;
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{lat = Math.round(this.props.coords.latitude * 1000) / 1000}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{long = Math.round(this.props.coords.longitude * 100) / 100}</td>
          </tr>
          <tr>
            <td>Ville</td>
            {this.state.length ? console.log("cool") : console.log('null')}
            {console.log('test', this.state, "$", this.state)}
            <td>
              <ul>
                <li>{this.state.locationReversed.length ? this.state.locationReversed[0].features[0].properties.city : null}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
            <div>Getting the location data&hellip; </div>
          );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);