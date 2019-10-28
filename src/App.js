import React from 'react';

// import des différents composants
import Connect from './components/Connect';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Notifications from './components/Notifications';
import PlantList from './components/PlantList';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        <Connect />

        <Notifications />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}
        <NavBar />
      </div>
    );
  }
}

export default App;
