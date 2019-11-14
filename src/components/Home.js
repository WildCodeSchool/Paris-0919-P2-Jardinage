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
    notifsCounter: 0,
    animationClass:""
  }

  addClass = () => {
     this.setState({ animationClass: "bounce-top" })
     setTimeout(() => {
      this.setState({animationClass: ""});
    }, 1000)
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
        {/* module de connexion sign in/up */}
        {this.state.isOnline ?
          <NavBar animationClass={this.state.animationClass} counter={this.state.notifsCounter} /> :
          <Connect />
        }

        {/* affichage météo relié à une API */}
        <Geoloc />

        {/* bare de recherche lié à une API plante */}
        <Search addClass={this.addClass} counter={this.handleCount} />

        {/* grille suggestion plantes */}
        <PlantList addClass={this.addClass} counter={this.handleCount} />/>

        {/* navbar mobile */}
        {this.state.isOnline ?
          <NavMobile animationClass={this.state.animationClass} counter={this.state.notifsCounter} /> 
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
