import React from 'react'

class WeatherDetails extends React.Component {

  state = {
    background: undefined
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      this.conditionalBackground()
    }
  }

  // ///////////////// conditional background to put into caalWeatherApi //////////////////////  

  conditionalBackground = () => {
    if (this.props.main === "Clear") {
      this.setState({ background: `yellow` })
    } else if (this.props.main === "Rain") {
      this.setState({ background: `red` })
    } else if (this.props.main === "Clouds") {
      this.setState({ background: `green` })
    } else if (this.props.main === "Thunderstorm") {
      this.setState({ background: `purple` })
    } else if (this.props.main === "Drizzle") {
      this.setState({ background: `pink` })
    } else if (this.props.main === "Snow") {
      this.setState({ background: `brown` })
    } else {
      this.setState({ background: `orange` })
    }
  }


  render() {
    const { city, country, temperature, humidity, description, error } = this.props
    console.log(" props", this.props)
    console.log(" state", this.state)
    console.log("props.main", this.props.main)
    return (
      <div className="weather__info">
        {
          city && country && <p className="weather__key"> Location:
	 		<span className="weather__value"> {city}, {country}</span>
          </p>
        }
        {
          temperature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> {temperature} °C</span>
          </p>
        }
        {
          humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> {humidity} %</span>
          </p>
        }
        {
          description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {description} </span>
          </p>
        }
        {
          error && <p className="weather__error">{error}</p>
        }
      </div>)
  }
}

export default WeatherDetails
