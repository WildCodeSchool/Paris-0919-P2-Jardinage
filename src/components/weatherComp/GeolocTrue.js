import React from "react"
import WeatherDetails from "./WeatherDetails"

const API_KEY = "7db2e8659b5a9fb66a3f54bcc4e4a67f"

class GeolocTrue extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    main: undefined
  }

  componentDidMount() {
    this.getWeather()
  }
  getWeather = async () => {
    const lat = this.props.lat
    const lon = this.props.lon

    // const lat = Math.round(this.props.lat * 1000) / 1000
    // const lon = Math.round(this.props.lon * 100) / 100
    console.log("lat", lat)
    console.log("lon", lon)
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    if (data.cod === "404") {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter correct values.",
        main: undefined
      });
    }
    else if (lat && lon) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        main: data.weather[0].main
      });
    }
  }
  render() {
    console.log("geoloc state" ,this.state)
    return (
      <div id="weather">
        <div className="weather__container">
          <WeatherDetails
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
            main ={this.state.main}
          />
        </div>
      </div>
    )
  }
}

export default GeolocTrue