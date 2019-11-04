import React from 'react'

class WeatherDetails extends React.Component {

  render() {
    const { city, country, temperature, humidity, description} = this.props
    // console.log(" props", this.props)
    // console.log(" state", this.state)
    // console.log("props.main", this.props.main)
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
        {/* {
          message && <p className="weather__error">{message}</p>
        } */}
      </div>)
  }
}

export default WeatherDetails
