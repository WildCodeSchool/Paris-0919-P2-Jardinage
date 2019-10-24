import React from 'react'
import './style/FormWeather.scss'

const FormWeather = props => (
  <form id="searchBar" onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <button id="buttonWeather">Get Weather</button>
  </form>
);



export default FormWeather;