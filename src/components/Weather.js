import React from 'react';
import FormWeather from './FormWeather';
import '../App.scss';
import { whileStatement } from '@babel/types';


class Weather extends React.Component {

  state = {
    weatherImage: '',
    weather : {}
  };
 //appel api
  getWeather = (weather) => {
    
      this.setState({
        weather : weather
      });
      const {description} = this.state.weather
      if (description === 'broken clouds') {
        return "weatherBrokenClouds"
        // this.setState({
        //   weatherImage:
        //     '../assets/img/weather/overcast-clouds.jpeg',
        // });
      } else if (description === 'overcast clouds') {
        return "weatherOvercastClouds"
      } else if (description === 'rain') {
        return "weatherRain"
      } else if (description === 'snowy') {
        return "weatherSnowy"
      } else if (description === 'foggy') {
        return "weatherFoggy"
      }


  }
  
  
  // componentDidMount() {
  //   if (this.state.description === 'broken clouds') {
  //     this.setState({
  //       weatherImage:
  //         'assets/img/weather/overcast-clouds.jpeg',
  //     });
  //   } else {
  //     this.setState({
  //       weatherImage:
  //         'assets/img/weather/thunderstorm.jpeg',
  //     });
  //   }
  // }

  render() {
    console.log(this.state.weatherImage);
    const weather = this.getWeather()
    return (
      <section id={weather}>
        <FormWeather getWeather={this.getWeather}/>
        <p>
          Location: {this.state.weather.city}, {this.state.weather.country}
        </p>
        <p>Temperature: {this.state.weather.temperature}</p>
        <p>Humidity: {this.state.weather.humidity}</p>
        <p>description : {this.state.weather.description}</p>
        {/* <img src="https://images.unsplash.com/photo-1488279790500-92397988c0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> */}
      </section>
    );
  }
}
export default Weather;

//style={{backgroundImage:"url('https://images.unsplash.com/photo-1488279790500-92397988c0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}