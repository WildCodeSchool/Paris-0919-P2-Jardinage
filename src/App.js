import React from 'react';
import Connect from './components/Connect';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import PlantList from './components/PlantList';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Connect />
        <Weather />
        <SearchBar />
        <PlantList />
        <Footer />
        <NavBar />
      </div>
    );
  }
}


export default App;
