import React from 'react';

// import des différents composants
import Connect from './Connect';
import Footer from './Footer';
import NavBar from './NavBar';
import PlantList from './PlantList';
import Search from './Search';
import Geoloc from './Geoloc';
import NavMobile from './NavMobile'

import '../App.scss';

class Home extends React.Component {
  state = {
    isOnline: false,
    email: '',
    notifsCounter: 0
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

  classAdd = () => {
    const element = document.getElementById("idnotif");
    const element2 = document.getElementById("idnotifMobile");
    if (element === null || element2 === null) {
      return null
    }
    else if (element === 0 || element2 === 0) {
      return null
    }
    else {
      element.classList.add('bounce-top')
      element2.classList.add('bounce-top')
      setTimeout(() => {
        element.classList.remove('bounce-top')
        element2.classList.remove('bounce-top')
      }, 600)
    }
  }

  handleCount = () => {
    this.setState({
      notifsCounter: this.state.notifsCounter + 1
    })
    //{ console.log("counter", this.state.notifsCounter) }
    this.classAdd()
  }

  render() {
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        {this.state.isOnline ?
          <NavBar counter={this.state.notifsCounter} /> :
          <Connect />
        }

        {/* affichage météo relié à une API */}
        <Geoloc />

        {/* bare de recherche lié à une API plante */}
        <Search counter={this.handleCount} />

        {/* grille suggestion plantes */}
        <PlantList counter={this.handleCount} />/>

        {/* navbar mobile */}
        {this.state.isOnline ?
          <NavMobile counter={this.state.notifsCounter} /> 
        :
          null
        }

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}

      </div>
    );
  }
}

export default Home;
