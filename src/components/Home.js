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
  state = {
    isOnline : false,
    email : ''
  }

  componentDidMount (){
    const email = localStorage.getItem('email');
    if(email) {
      this.setState({
        isOnline : true
      })
    } else {
      this.setState({
        isOnline : false
      })
    }
  }

  render() {
    console.log(this.state.isOnline)
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        {this.state.isOnline ? 
          <NavBar /> :
          <Connect />
        }

        {/* affichage météo relié à une API */}
        <Geoloc />

        {/* bare de recherche lié à une API plante */}
        <Search />

        {/* grille suggestion plantes */}
        <PlantList />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}
        
      </div>
    );
  }
}

export default Home;
