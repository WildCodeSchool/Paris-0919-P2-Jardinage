import React from 'react'
import axios from "axios"

import FormWeather from './FormWeather'

import './style/Weather.scss'


const API_KEY = "5fb2333ba75358bc5030738944a75305"
class Weather extends React.Component {
  state = {
    weatherImage: '',
    weather : {},
    weatherCss : "",
    isLoad: false
  };

  modifState = (paramCss) => {
    console.log(paramCss)
    this.setState({isLoad: true, weatherCss: paramCss})
  }
   getWeatherCss =  () => {
      const {description} = this.state.weather.weather[0]
        if (description === 'broken clouds') {
          this.modifState("weatherBrokenClouds" )
        } else if (description === 'overcast clouds') {
          this.modifState("weatherOvercastClouds" )
        } else if (description === 'rain') {
          this.modifState("weatherRain")
        } else if (description === 'snow') {
          this.modifState("weatherSnow")
        } else if (description === 'mist') {
          this.modifState("weatherMist")
        } else if (description === 'clear sky') {
          this.modifState("weatherClearSky")
        }
  }
 //appel api
  getWeatherData = async (city, country) => { 
    const getData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    this.setState({weather: getData.data})
    console.log("dsqdsd",this.state.weather)
    this.getWeatherCss()
    if (city && country) {
       this.setState ({
           temperature: getData.data.main.temp,
           city: getData.data.name,
           country: getData.data.sys.country,
           humidity: getData.data.main.humidity,
           description: getData.data.weather[0].description,
           error: ''
         });
         // this.props.getWeather(weather);
       } else {
         this.setState ({
           temperature: undefined,
           city: undefined,
           country: undefined,
           humidity: undefined,
           Description: undefined,
         error: "Please enter the value."
         });
         // this.state.getWeatherData(weather);
       }
    

  }
  componentDidMount() {
    // this.getWeather()
  }
  render(){
    const { isLoad } = this.state
    return (
      <section className='weather' id={isLoad ? this.state.weatherCss : "weatherBrokenClouds"}>
        <FormWeather getWeatherData={this.getWeatherData}/>
        <p>
          Location : {this.state.city}, {this.state.country}
        </p>
        <p>Temperature : {this.state.temperature}</p>
        <p>Humidity : {this.state.humidity}</p>
        <p>Description : {this.state.description}</p> 
     </section>
    );
  }
}
export default Weather;
  