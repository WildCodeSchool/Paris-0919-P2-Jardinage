import React from 'react';

// import des différents composants
import Connect from './components/Connect';
import Geoloc from './components/Geoloc';
import PlantList from './components/PlantList';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Search from './components/Search';

import './App.scss';

class App extends React.Component {
  // componentDidMount() {
  //   fetch('http://localhost:/3000/')
  //     .then(response => console.log(response))
  // }
  render() {
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        <Connect />

        {/* affichage météo relié à une API */}
        <Geoloc />

        {/* bare de recherche lié à une API plante */}
        <Search />

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
