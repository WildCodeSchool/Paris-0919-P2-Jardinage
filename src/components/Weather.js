import React from 'react'
import axios from "axios"

import FormWeather from './FormWeather'

import './style/Weather.scss'
import { whileStatement } from '@babel/types'

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
        } else if (description === 'snowy') {
          this.modifState("weatherSnowy")
        } else if (description === 'foggy') {
          this.modifState("weatherFoggy")
        } else if (description === 'clear sky') {
          this.modifState("weatherClearSky")
        }
  }
 //appel api
  getWeatherData = async (city, country) => { 
    const getData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    await this.setState({weather: getData.data})
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
          Location: {this.state.city}, {this.state.country}
        </p>
        <p>Temperature: {this.state.temperature}</p>
        <p>Humidity: {this.state.humidity}</p>
        <p>description : {this.state.description}</p> 
        {/* <img src="https://images.unsplash.com/photo-1488279790500-92397988c0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> */}
      </section>
    );
  }
}
export default Weather;

//style={{backgroundImage:"url('https://images.unsplash.com/photo-1488279790500-92397988c0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}


  // createWeather = async (e)=> {
  //   e.preventDefault();
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    // const data = await api_call.json();
    // console.log("  weatherCat : ""a fetch :",data)
    // if (city && country) {
    //   const weather = {
    //     temperature: data.main.temp,
    //     city: data.name,
    //     country: data.sys.country,
    //     humidity: data.main.humidity,
    //     description: data.weather[0].description,
    //     error: ''
    //   };
    //   this.props.getWeather(weather);
    // } else {
    //   const weather = {
    //     temperature: undefined,
    //     city: undefined,
    //     country: undefined,
    //     humidity: undefined,
    //     description: undefined,
    //     error: "Please enter the value."
    //   };
    //   this.props.getWeather(weather);
    // }
  