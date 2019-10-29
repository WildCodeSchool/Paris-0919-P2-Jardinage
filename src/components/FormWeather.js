import React from 'react'
import './style/FormWeather.scss'

const thekey = "68e21d29703f8eaf843514c213c70106"

class FormWeather extends React.Component {

  state = {
    actualCity: undefined,
    actualCountry: undefined,
    tapedCity: undefined,
    tapedCountry: undefined,
    weather: undefined,
    temp: undefined,
    main: undefined,
    background: `grey`
    // background: background
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.city !== this.props.city) {
      this.callWeatherApiGeo()
      console.log("console.log componentDidUpdate j'en veux 1 et seulement 1", this.props.city, this.props.country)
    }
  }

  ///////////////// call api weather when geo authorized //////////////////////
  callWeatherApiGeo = async () => {
    const city = this.props.city
    const country = this.props.country
    const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${thekey}&units=metric`)
    const data = await apicall.json()
    console.log(data)
    this.setState({
      temp: data.main.temp,
      main: data.weather[0].main,
      actualCity: city,
      actualCountry: country
    })
    this.conditionalBackground()
  }
  ///////////////// call api weather when geo NOT authorized //////////////////////
  callWeatherApi = async (e) => {
    e.preventDefault()
    const city = this.state.tapedCity
    const country = this.state.tapedCountry
    const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${thekey}&units=metric`)
    const data = await apicall.json()
    console.log(data)
    this.setState({
      temp: data.main.temp,
      main: data.weather[0].main,
      actualCity: city,/*test1*/
      actualCountry: country,
      tapedCity: "",
      tapedCountry: ""
    })
    this.conditionalBackground()
  }
  ///////////////// conditional background to put into caalWeatherApi //////////////////////  

  conditionalBackground = () => {
    if (this.state.main === "Clear") {
      this.setState({ background: `yellow` })
    } else if (this.state.main === "Rain") {
      this.setState({ background: `red` })
    } else if (this.state.main === "Clouds") {
      this.setState({ background: `green` })
    } else if (this.state.main === "Thunderstorm") {
      this.setState({ background: `purple` })
    } else if (this.state.main === "Drizzle") {
      this.setState({ background: `pink` })
    } else if (this.state.main === "Snow") {
      this.setState({ background: `brown` })
    } else {
      this.setState({ background: `orange` })
    }
  }
  ///////////////// dynamic form ////////////////////// 
  handleCityChange = (e) => {
    const cityChange = e.target.value
    this.setState({ tapedCity: cityChange })
  }

  handleCountryChange = (e) => {
    const countryChange = e.target.value
    this.setState({ tapedCountry: countryChange })
  }

  render() {
    return (
      <div className="wrapper_weather" style={{ background: this.state.background }}> {/* style={{ backgroundImage: `url(${this.state.background})` }} */}

        {this.state.actualCity ? <p style={{ color: "black" }}>{this.state.actualCity}</p> : <p style={{ color: "black" }}>{this.state.tapedCity}</p>}
        {this.state.actualCountry ? <p style={{ color: "black" }}>{this.state.actualCountry}</p> : <p style={{ color: "black" }}>{this.state.tapedCountry}</p>}
        {this.state.temp && <p style={{ color: "black" }}>{this.state.temp}</p>}
        {this.state.main && <p style={{ color: "black" }}>{this.state.main}</p>}

        {/* ///////////////////////////////////////// Conditionnal form start //////////////////////////////////////////////////////// */}
        <form onSubmit={this.callWeatherApi}>
          {this.props.city === "false"
            &&
            <label htmlFor="">
              Your city
            <input value={this.state.tapedCity} onChange={this.handleCityChange} type="text" />
            </label>}

          {this.props.country === "false"
            &&
            <label htmlFor="">
              Your country
          <input value={this.state.tapedCountry} onChange={this.handleCountryChange} type="text" />
            </label>}

          {this.props.city === "false"
            &&
            this.props.country === "false"
            &&
            <button>Click me!!!</button>
          }
        </form>
        {/* ///////////////////////////////////////// Conditionnal form end //////////////////////////////////////////////////////// */}

      </div >
    )
  }
}

export default FormWeather