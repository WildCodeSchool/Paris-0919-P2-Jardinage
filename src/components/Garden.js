import React from 'react';

// import des différents composants
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Search from './Search';
import GardenList from './gardenComp/GardenList'
import NavMobile from './NavMobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf  } from '@fortawesome/free-solid-svg-icons'

import '../App.scss';
import './style/searchBar.scss'

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

  gardenInfo = () => {
    if (localStorage.ids === 0) {
      return (
        <div className="plantCard-error">
          <p>Your garden is empty! You can add plants to take care of... <FontAwesomeIcon icon={faLeaf} /></p>
        </div>
      )
    }
  }

  render() {
    const isThereAPlant = localStorage.ids
    
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        <NavBar />

        {/* bare de recherche lié à une API plante */}
        <Search />

        {isThereAPlant ? <GardenList /> : this.gardenInfo()}

        {/* grille suggestion plantes
        <GardenList /> */}

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
