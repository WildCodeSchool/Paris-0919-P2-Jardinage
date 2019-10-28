import React from 'react'
import './style/FormWeather.scss'

class FormWeather extends React.Component {
  state = {
    city: "", 
    country: ""
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render () {
    console.log(this.props)
    const {country, city} = this.state
    return (
    <div id="searchBar">
        <input type="text" name="city" onChange={this.handleChange} placeholder="City..."/>
        <input type="text" name="country" onChange={this.handleChange} placeholder="Country..."/>
        <button id="buttonWeather"  onClick={() => this.props.getWeatherData(city, country)}>Get Weather</button>
      </div>
    );
  }
}

// onClick={this.props.setWeatherImage}

export default FormWeather;