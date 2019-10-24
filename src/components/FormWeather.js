import React from 'react'
import './style/FormWeather.scss'

class FormWeather extends React.Component {
  render () {
    return (
      <form id="searchBar" onSubmit={this.props.getWeather} onClick={this.props.setWeatherImage}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button id="buttonWeather">Get Weather</button>
      </form>
    );
  }
};



export default FormWeather;