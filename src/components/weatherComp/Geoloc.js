import React from "react";
import { geolocated } from "react-geolocated";
import GeolocTrue from "./GeolocTrue"
import Weather from "../Weather"

class Geoloc extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <Weather>{console.log('Geolocation is not enabled')}</Weather>
    ) : this.props.coords ? (
      <GeolocTrue  lat={this.props.coords.latitude} lon={this.props.coords.longitude} />
    ) : (
            <div>Getting the location data&hellip; </div>
          );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 999999,
})(Geoloc);