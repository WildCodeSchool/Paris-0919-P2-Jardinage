import React from 'react';

// import des différents composants
import Connect from './Connect';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import PlantList from './PlantList';
import Search from './Search';
import Geoloc from './Geoloc';

import '../App.scss';

class Home extends React.Component {
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

export default Home;
