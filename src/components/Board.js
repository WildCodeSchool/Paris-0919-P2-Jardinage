import React from 'react';

// import des différents composants
import Home from './Home'
import Footer from './Footer';
import NavBar from './NavBar';
import Search from './Search';
import GardenList from './gardenComp/GardenList';
import NavMobile from './NavMobile';

import '../App.scss';

class Board extends React.Component {
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

  handleCount = () => {
    this.setState({
      notifsCounter: this.state.notifsCounter + 1
    })
    {console.log("counter",this.state.notifsCounter)}
  }

  render() {
    if (this.state.isOnline) {
      return (
        <div className="app">

          {/* module de connexion sign in/up */}
          <NavBar counter={this.state.notifsCounter}/>

          {/* bare de recherche lié à une API plante */}
          <Search />

          {/* grille suggestion plantes */}
          <GardenList counter={this.handleCount}/>


          {/* navbar mobile */}
          <NavMobile counter={this.state.notifsCounter}/>

          {/* infos / réseaux sociaux */}
          <Footer />

          {/* menu de l'appli une fois connecté garden/board/alerts */}

        </div>
      )
    }
    else {
      return (<Home/>)
    }
  }
}

export default Board;
