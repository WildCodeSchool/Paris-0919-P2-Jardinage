import React from 'react';

// import des différents composants
import Connect from './components/Connect';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import PlantList from './components/PlantList';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import FormWeather from './components/FormWeather';
import './App.scss';

const API_KEY = "5fb2333ba75358bc5030738944a75305"; 
class App extends React.Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: "Please enter the value."
      });
    }
  } 

  render() {
    console.log(this.state.description)
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        <Connect />

        {/* affichage météo relié à une API */}
        <FormWeather getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />

        {/* bare de recherche lié à une API plante */}
        <SearchBar />

        {/* grille suggestion plantes */}
        <PlantList />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}
        <NavBar />
      </div>
    );
  }
}

export default App;
