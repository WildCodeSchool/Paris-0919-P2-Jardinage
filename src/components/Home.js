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
    console.log("youpi youpi")
     this.setState({ animationClass: "bounce-top" })
     setTimeout(() => {
      this.setState({animationClass: ""});
    }, 1000)
    // setTimeout( this.setState({ animationClass: "" }), 100)
   
  }

  logOut = () => {
    localStorage.removeItem("email");
    this.setState({isOnline: false})
    alert("Vous êtes déconnecté")
  };

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
          <NavBar animationClass={this.state.animationClass} counter={this.state.notifsCounter} logOut={this.logOut} /> :
          <Connect />
        }

        {/* affichage météo relié à une API */}
        <Geoloc />

        {/* bare de recherche lié à une API plante */}
        <Search counter={this.handleCount} logged={this.state.isOnline}/>

        {/* grille suggestion plantes */}
        <PlantList addClass={this.addClass} counter={this.handleCount} logged={this.state.isOnline}/>

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
