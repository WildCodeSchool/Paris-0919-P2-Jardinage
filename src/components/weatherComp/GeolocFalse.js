import React from 'react';
// import Titles from "./Titles"
import Form from "./Form"
import WeatherDetails from "./WeatherDetails"

const API_KEY = "7db2e8659b5a9fb66a3f54bcc4e4a67f";

class GeolocFalse extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    if (data.cod === "404") {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter correct values."
      });
    }
    else if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
  }
  render() {
    return (
      < div id="weather" >
        {/* <Titles /> */}
        <Form getWeather={this.getWeather} />

        <div id="weather__container">
          <WeatherDetails
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div >
    )
  }
}

export default GeolocFalse;
