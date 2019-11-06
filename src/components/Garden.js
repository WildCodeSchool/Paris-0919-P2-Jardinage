import React from 'react';

// import des différents composants
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Search from './Search';
import GardenList from './gardenComp/GardenList';
import NavMobile from './NavMobile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTint,
  faSeedling,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';

import '../App.scss';
import './style/searchBar.scss';

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"


class Garden extends React.Component {
  state = {
    isOnline: false,
    email: '',
    plantsAdded: []
  };
  componentDidMount() {
    this.getPlant()
    const email = localStorage.getItem('email');
    if (email) {
      this.setState({
        isOnline: true
      });
    } else {
      this.setState({
        isOnline: false
      });
    }
  }
  getPlant = async () => {
    if (localStorage.ids !== undefined) {
    const localStorageData = JSON.parse(localStorage.ids)
    let toRender = []
    for (let i = 0; i < localStorageData.length; i++) {
      const api_call = await fetch(`https://trefle.io/api/plants/${localStorageData[i]}?token=${API_KEY}`)
      const data = await api_call.json()
      toRender.push(data)
    }
    this.setState({ plantsAdded: toRender })
    } 
  }

  gardenInfo = () => {
    if (localStorage.id === undefined) {
      return (
        <div>
          <p className="plantCard-error">
            Your garden is empty! You can add plants to take care of... :){' '}
            <FontAwesomeIcon icon={faLeaf} />
          </p>
        </div>
      );
    }
  };

  render() {
    const isThereAPlant = localStorage.ids;

    return (
      <div className="app">
        {/* module de connexion sign in/up */}
        <NavBar />

        {/* bare de recherche lié à une API plante */}
        <Search getPlant={this.getPlant} />

        {isThereAPlant ? <GardenList getPlant={this.getPlant} newPlants={this.state.plantsAdded} /> : this.gardenInfo()}

        {/* grille suggestion plantes
        <GardenList /> */}

        {/* navbar mobile */}
        <NavMobile />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}
      </div>
    );
  }
}

export default Garden;
