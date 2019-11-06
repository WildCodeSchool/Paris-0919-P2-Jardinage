import React from 'react';

// import des différents composants
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Search from './Search';
import GardenList from './gardenComp/GardenList'
import NavMobile from './NavMobile'

import '../App.scss';

class Garden extends React.Component {
  state = {
    isOnline: false,
    email: ''
  }

  componentDidMount() {
    const email = localStorage.getItem('email');
    if (email) {
      this.setState({
        isOnline: true
      })
    } else {
      this.setState({
        isOnline: false
      })
    }
  }

  render() {
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        <NavBar />

        {/* bare de recherche lié à une API plante */}
        <Search />

        {/* grille suggestion plantes */}
        <GardenList />

        {/* navbar mobile */}
        <NavMobile />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}

      </div>
    )
  }
}

export default Garden;
