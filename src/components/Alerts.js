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
    if (this.state.isOnline) {
      return (
        <div className="app">

          {/* module de connexion sign in/up */}
          <NavBar counter={this.state.notifsCounter} />

          {/* grille suggestion plantes */}
          <Notifications />

          {/* navbar mobile */}
          <NavMobile counter={this.state.notifsCounter} />

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
