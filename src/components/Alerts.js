import React from 'react';

// import des différents composants
import Home from './Home'
import Footer from './Footer';
import NavBar from './NavBar';
import Notifications from './Notifications';
import NavMobile from './NavMobile';

import '../App.scss';

class Alerts extends React.Component {
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
    console.log(this.state.isOnline)
    if (this.state.isOnline) {
      return (
        <div className="app">

          {/* module de connexion sign in/up */}
          <NavBar />

          {/* grille suggestion plantes */}
          <Notifications />

          {/* navbar mobile */}
          <NavMobile />

          {/* infos / réseaux sociaux */}
          <Footer />

          {/* menu de l'appli une fois connecté garden/board/alerts */}

        </div>
      )
    }
    else {
      return (<Home />)
    }
  }
}

export default Alerts;
