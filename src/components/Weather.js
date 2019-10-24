import React from 'react';
class Weather extends React.Component {
  state = {
    weatherImage: '',
  };

  setWeatherImage() {
    if (this.props.description === 'overcast clouds') {
      this.setState({
        weatherImage:
          'assets/img/weather/overcast-clouds.jpeg',
      });
    } else {
      this.setState({
        weatherImage:
          'assets/img/weather/thunderstorm.jpeg',
      });
    }
  }

  render() {
    return (
      <section class="weather">
        <p>
          Location: {this.props.city}, {this.props.country}
        </p>
        <p>Temperature: {this.props.temperature}</p>
        <p>Humidity: {this.props.humidity}</p>
        <img src={this.state.weatherImage} alt={this.props.description}></img>
      </section>
    );
  }
}
export default Weather;
