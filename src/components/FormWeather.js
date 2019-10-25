import React from 'react'
import './style/FormWeather.scss'

const API_KEY = "5fb2333ba75358bc5030738944a75305";
class FormWeather extends React.Component {
  createWeather = async (e)=> {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      const weather = {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      };
      this.props.getWeather(weather);
    } else {
      const weather = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      };
      this.props.getWeather(weather);
    }
  }

  
  render () {
    return (
      <form id="searchBar" onSubmit={e => this.createWeather(e)}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button id="buttonWeather">Get Weather</button>
      </form>
    );
  }
}

// onClick={this.props.setWeatherImage}

export default FormWeather;