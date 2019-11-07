import React from 'react';

// import des différents composants
import Footer from './Footer.js';
import Connect from './Connect'
import NavBar from './NavBar.js';
import Search from './Search';
import GardenList from './gardenComp/GardenList'
import NavMobile from './NavMobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import '../App.scss';
import './style/searchBar.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class Garden extends React.Component {
  state = {
    isOnline: false,
    email: '',
    plantsAdded: []
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
    this.getPlant()
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
 
  handleDeletePlant = (plantId) => {
    console.log("cliiick", plantId);
    const localStorageData = JSON.parse(localStorage.ids)
    console.log(localStorageData)
     localStorageData.splice(plantId,1)
    console.log(localStorageData);
    
    // localStorageData.filter((elt, index) => {
    
    // })
    
    // localStorage.removeItem('ids')
    // this.getPlant()
  }

  gardenInfo = () => {
    if (localStorage.ids === []) {
      return (
        <div className="plantCard-error">
          <p>Your garden is empty! You can add plants to take care of... <FontAwesomeIcon icon={faLeaf} /></p>
        </div>
      )
    }
  }

  render() {
    const isThereAPlant = this.state.plantsAdded
    const {plantsAdded} = this.state
    return (
      <div className="app">

        {/* module de connexion sign in/up */}
        {this.state.isOnline ?
          <NavBar /> :
          <Connect />
        }

        {/* bare de recherche lié à une API plante */}
        <Search />

        {isThereAPlant ? 
          <GardenList 
            handleDeletePlant={this.handleDeletePlant}
            plantsAdded={plantsAdded}
          /> 
          : 
          this.gardenInfo()}

        {/* grille suggestion plantes
        <GardenList /> */}

        {/* navbar mobile */}
        <NavMobile />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}

      </div>
    )
  }
}

export default Garden;
