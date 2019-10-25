import React from 'react'

class FormWeather extends React.Component {

  state = {
    tapedCity: undefined,
    tapedCountry: undefined
  }

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
      <div style={{ color: "black" }}>

        <p style={{ color: "black" }}>{this.state.tapedCity ? this.state.tapedCity : this.props.city}</p>
        <p style={{ color: "black" }}>{this.state.tapedCountry ? this.state.tapedCountry : this.props.country}</p>

        {/* ///////////////////////////////////////// Conditionnal form start //////////////////////////////////////////////////////// */}
        <form>
          {this.props.city === "NO GEO NO CITY"
            &&
            <label htmlFor="">
              Your city
            <input value={this.state.city} onChange={this.handleCityChange} type="text" />
            </label>}

          {this.props.country === "NO GEO NO COUNTRY"
            &&
            <label htmlFor="">
              Your country
          <input value={this.state.country} onChange={this.handleCountryChange} type="text" />
            </label>}

          {this.props.city === "NO GEO NO CITY"
            &&
            this.props.country === "NO GEO NO COUNTRY"
            &&
            <input type="submit"></input>
          }
        </form>
        {/* ///////////////////////////////////////// Conditionnal form end //////////////////////////////////////////////////////// */}

      </div>
    )
  }
}

export default FormWeather