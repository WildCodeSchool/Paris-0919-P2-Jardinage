import React from 'react';

// import des différents composants
import Home from './Home.js'
import Footer from './Footer.js';
import NavBar from './NavBar.js';

import '../App.scss';
import './style/Weather.scss'

class NotFound extends React.Component {
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

          <div id="weather" className="default">
            <div id="weather__container">
              <div className="weather__info">
                Not Found
              </div>
            </div>
          </div>

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

export default NotFound;
