import React from 'react'

const Weather = props => (
  <div id='weather'>
    <p>Location: {props.city}, {props.country}</p>
    <p>Temperature: {props.temperature}</p>
    <p>Humidity: {props.humidity}</p>
    <p>Conditions: {props.description}</p>
    <p>{props.error}</p>
  </div>
)


export default Weather;
