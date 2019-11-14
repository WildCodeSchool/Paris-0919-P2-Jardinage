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
import './style/notifs.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class Garden extends React.Component {
  state = {
    isOnline: false,
    email: '',
    plantsAdded: [],
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
    this.getPlant()
    if (localStorage.getItem('ids') === null) {
      localStorage.setItem('ids', JSON.stringify([]));
    }
    else {
      this.handleCount()
    }
  }

  // Appel API et stocke le résultat dans le state
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

  // Gère la suppression d'une card plante sur le clic sur la poubelle
  handleDeletePlant = (plantId) => {
    const localStorageData = JSON.parse(localStorage.ids)
    localStorageData.splice(plantId, 1)
    localStorage.setItem('ids', JSON.stringify(localStorageData))
    this.getPlant()
    this.handleCount()
    this.deleteInfo()
  }
  
  // Message d'information pour la supression d'une plante
  deleteInfo = () => {
    const msg = document.getElementById("delete--message")
    msg.classList.add('msg-in')
    setTimeout(() => {
      msg.classList.remove('msg-in')
    }, 3000)
  }

  // Gère le compteur du garden
  handleCount = () => {
    const localStorageData = JSON.parse(localStorage.ids)
    this.setState({ notifsCounter: localStorageData.length })
  }

  // Msg d'information si le garden est vide
  gardenInfo = () => {
    return (
      <div className="plantCard-error">
        <p>Your garden is empty! You can add plants to take care of... <FontAwesomeIcon icon={faLeaf} /></p>
      </div>
    )
  }
  
  // RENDU DU COMPOSANT
  render() {
    const { plantsAdded, isOnline } = this.state
    
    return (
      <div className="app">
        
        <div id="delete--message" className="msg-off">
          You successfully deleted your plant
        </div>

        {/* module de connexion sign in/up */}
        {isOnline ?
          <NavBar counter={this.state.notifsCounter} /> :
          <Connect />
        }

        {/* bare de recherche lié à une API plante */}
        <Search counter={this.handleCount} addClass={this.props.addClass}/>
        
        {(plantsAdded.length !==0) ? 
          <>
          <div className="plantCard-error">
            <p>Congratulations, your garden contains {plantsAdded.length} plants !</p>
          </div>
          <GardenList 
            handleDeletePlant={this.handleDeletePlant}
            plantsAdded={plantsAdded}
          /> 
          </>
        :
        this.gardenInfo()}

        {/* grille suggestion plantes
        <GardenList /> */}

        {/* navbar mobile */}
        <NavMobile counter={this.state.notifsCounter} />

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}

      </div>
    )
  }
}

export default Garden;
