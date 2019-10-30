import React from 'react'
import '../style/WeatherForm.scss'

class Form extends React.Component {

  render() {
    return (
      <div id="searchBar">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button className="buttonWeather">Get Weather</button>
        </form>
      </div>
    )
  }
}
export default Form;
