import React from 'react';

import PlantCard from './PlantCard';
import SearchForm from './SearchForm'

import '../App.scss';
import './style/searchBar.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"
let finalResult = []

class Search extends React.Component {
  state = { 
    error: undefined,
    visible_caption: false,
    oneItemResult: false,
    scrollMsg: false
  }

  // Fonction random qui sera utilisée pour afficher aléatoirement les images disponibles
  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getPlant = async e => {
    finalResult = []
    e.preventDefault()
    const common_name = e.target.common_name.value
    const default_img = "https://res.cloudinary.com/dsbgj0oop/image/upload/v1572516426/default_img.png"
    // Premier appel API
    const api_1st_call = await fetch(`https://trefle.io/api/plants?q=${common_name}&complete_data=true&token=${API_KEY}`)
    const data = await api_1st_call.json()
    
    // Si le premier appel API renvoie des résultats...
    if(data[0]){
      // ... et que l'utilisateur a bien tapé quelque chose dans l'input
      if(common_name && data[0]){
        // ...on lance un second appel API en boucle sur chaque ID de plante récupérée dans le 1er appel API 
        for (let i=0; i < data.length; i++) {
          const api_2nd_call = await fetch(`https://trefle.io/api/plants/${data[i].id}?token=${API_KEY}`)
          const data_plant = await api_2nd_call.json()
          const species = data_plant.main_species ? data_plant.main_species.common_name:'undefined'
          const randImage = data_plant.images[0] !== undefined ? data_plant.images[this.getRandomInt(data_plant.images.length)].url : default_img
          finalResult.push({id: data_plant.id, common_name: species, scientific_name:data_plant.scientific_name, image: randImage})
        } 
        // Condition d'affichage selon le nombre de plantes à afficher
        if (finalResult.length > 1) {
          this.setState({
            visible_caption: true,
            oneItemResult: false,
            error: undefined
          })
        } else {
          this.setState({
            visible_caption: true,
            oneItemResult: true,
            error: undefined
          })
        }
      } else {
        this.setState({
          visible_caption: false,
          error: "Please enter a value"
        })
      }
    } else {
      this.setState({
        visible_caption: false,
        error: "Sorry, nothing was found. Please make another research."
      })
    }
  }

  render() {
    const { error, visible_caption, oneItemResult } = this.state
    const scrollClass = (finalResult.length > 2) ? "scroll" : "no-scroll"
    const displayS = (finalResult.length > 1) ? "s" : "no-s"
    return (
      <div className="search">
        <SearchForm getPlant={this.getPlant} />
        <p className={visible_caption? "plantCard-error":"plantCard-error invisible"}>
          {`${finalResult.length} plant`}
          <span className={displayS}>s </span>{` found. `} 
          <span className={scrollClass}>Please scroll to watch all the results !</span>
        </p>
        <div className="search-result">
          {!error ? (
            <>
            {finalResult.map(item => 
            (
              <PlantCard
                key={item.id}
                id={item.id}
                common_name={item.common_name}
                scientific_name={item.scientific_name}
                image={item.image}
                error={error}
                visible_caption={visible_caption}
                oneItemResult={oneItemResult}
              />
            ))}
            </>
          ) : (
            <>{error && <p className="plantCard-error">{error}</p>}</>
          )}     
        </div>
      </div>
    );
  }
}

export default Search;