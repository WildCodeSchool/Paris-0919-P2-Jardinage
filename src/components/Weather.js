import React from 'react';
import '../App.scss';
class Weather extends React.Component {
  state = {
    weatherImage: 'thunderstorm.jpeg',
  };

  setWeatherImage() {
    if (this.props.description === 'broken clouds') {
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
      <section id="weather" style={{backgroundImage:"url('https://images.unsplash.com/photo-1488279790500-92397988c0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}>
        
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
