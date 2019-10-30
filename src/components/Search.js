import React from 'react'

import PlantCard from './PlantCard'
import SearchForm from './SearchForm'

import '../App.scss'
import './style/searchBar.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"
let idSearchResult = []
let finalResult = []

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
}

class Search extends React.Component {
  state = { 
    id: undefined,
    common_name: undefined,
    scientific_name: undefined,
    image: undefined,
    error: undefined,
    visible_caption: false,
    isLoaded: false
  }

  getPlant = async e => {
    idSearchResult = []
    finalResult = []
    e.preventDefault()
    const common_name = e.target.common_name.value
    const default_img = "https://s2.best-wallpaper.net/wallpaper/1600x900/1708/Art-drawing-tree-earth-green_1600x900.jpg"
    const api_1st_call = await fetch(`https://trefle.io/api/plants?q=${common_name}&complete_data=true&token=${API_KEY}`)
    const data = await api_1st_call.json()
    data.forEach((item) => {
      idSearchResult.push(item.id)
    });
    const idTen = idSearchResult.filter((item, index) => index < 11)
    
    if(idTen[0]){
      for (let i=0; i < idTen.length; i++) {
        const api_2nd_call = await fetch(`https://trefle.io/api/plants/${idTen[i]}?token=${API_KEY}`)
        const data_specific = await api_2nd_call.json()
        const species = data_specific.main_species ? data_specific.main_species.common_name:'undefined'
        if(common_name && idTen[0]){
          this.setState({
            id: data_specific.id,
            common_name: species,
            scientific_name: data_specific.scientific_name,
            image: data_specific.images[0] !== undefined ? data_specific.images[getRandomInt(data_specific.images.length)].url : default_img,
            visible_caption: true,
            isLoaded: true,
            error: undefined
          }, () => {
            finalResult.push(this.state)
          })
        } else {
          this.setState({
            error: "Please enter a value"
          })
        }
      }  
    } else {
      this.setState({
        error: "Sorry, nothing was found. Please make another research."
      })
    }
  }

  render() {
    const { error } = this.state
    return (
      <div className="search">
        <SearchForm getPlant={this.getPlant} />

        <div className="search-result">
          {!error ? (
            <>
            {finalResult.map(item => (
              <PlantCard
                key={item.id}
                common_name={item.common_name}
                scientific_name={item.scientific_name}
                image={item.image}
                error={item.error}
                visible_caption={item.visible_caption}
              />
            ))}
            </>
          ) : (
            <>{error && <p className="plantCard-error">{error}</p>}</>
          ) }
          
        </div>
      </div>
    );
  }
}

export default Search