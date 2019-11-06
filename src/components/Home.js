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
    element.classList.add('slide-in-blurred-right')
    element2.classList.add('slide-in-blurred-right')
    setTimeout(() => {
      element.classList.remove('slide-in-blurred-right')
      element2.classList.remove('slide-in-blurred-right')
    }, 600)
  }

  handleCount = () => {
    this.setState({
      notifsCounter: this.state.notifsCounter + 1
    })
    { console.log("counter", this.state.notifsCounter) }
    this.classAdd()
  }

  render() {
    console.log(this.state.toggle)
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
        <Search />

        {/* grille suggestion plantes */}
        <PlantList counter={this.handleCount} />/>

        {/* navbar mobile */}
        {this.state.isOnline ?
          <NavMobile counter={this.state.notifsCounter} /> :
          null}

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}

      </div>
    );
  }
}

export default Home;
