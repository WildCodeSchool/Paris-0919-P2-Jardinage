import React from "react";
import { geolocated } from "react-geolocated";
import GeolocTrue from "./weatherComp/GeolocTrue"
import GeolocFalse from "./weatherComp/GeolocFalse"
import './style/Weather.scss'

class Geoloc extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div id="weather"><div>Your browser does not support Geolocation</div></div>
    ) : !this.props.isGeolocationEnabled ? (
      <GeolocFalse>{console.log('Geolocation is not enabled')}</GeolocFalse>
    ) : this.props.coords ? (
      <GeolocTrue lat={this.props.coords.latitude} lon={this.props.coords.longitude} />
    ) : (
            <div id="weather">Getting the location data&hellip; </div>
          );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 999999,
})(Geoloc);