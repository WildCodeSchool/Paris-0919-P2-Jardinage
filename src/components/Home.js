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
    if (localStorage.getItem('ids') === null) {
      localStorage.setItem('ids', JSON.stringify([]));
    }
    else {
      this.handleCount()
    }
  }

  handleCount = () => {
    const localStorageData = JSON.parse(localStorage.ids)
    this.setState({ notifsCounter: localStorageData.length })
  }

  render() {
    // console.log(this.state.toggle)
    return (
      <div className="app">
        {console.log('counter', this.state.notifsCounter)}
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
