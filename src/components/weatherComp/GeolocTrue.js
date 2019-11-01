import React from "react"
import WeatherDetails from "./WeatherDetails"
import '../style/Weather.scss'

const API_KEY = "7db2e8659b5a9fb66a3f54bcc4e4a67f"

class GeolocTrue extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    main: undefined,
    background: "default"
  }

  // ///////////////// conditional background to put into caalWeatherApi //////////////////////  

  conditionalBackground = () => {
    if (this.state.main === "Clear") {
      this.setState({ background: `clear` })
    } else if (this.state.main === "Rain") {
      this.setState({ background: `rain` })
    } else if (this.state.main === "Clouds") {
      this.setState({ background: `clouds` })
    } else if (this.state.main === "Thunderstorm") {
      this.setState({ background: `thunderstorm` })
    } else if (this.state.main === "Drizzle") {
      this.setState({ background: `drizzle` })
    } else if (this.state.main === "Snow") {
      this.setState({ background: `snow` })
    } else {
      this.setState({ background: `default` })
    }
  }

  componentDidMount() {
    this.getWeather()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.conditionalBackground()
    }
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
    console.log("state", this.state)
    return (
      <div id="weather" className={this.state.background}>
        {this.state.city && this.state.country ?
          <div className="weather__container">
            <WeatherDetails
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
              message={this.state.message}
            />
          </div>
          : this.state.error ?
            <div className="weather__info">{this.state.message}</div>
            : <div className="weather__info">Unknown error</div>}
      </div>
    )
  }
}

export default GeolocTrue