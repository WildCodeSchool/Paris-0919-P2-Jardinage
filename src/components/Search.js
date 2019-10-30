import React from 'react'

import PlantCard from './PlantCard'
import SearchForm from './SearchForm'

import '../App.scss'
import './style/searchBar.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

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
    e.preventDefault()
    const common_name = e.target.common_name.value
    const default_img = "https://s2.best-wallpaper.net/wallpaper/1600x900/1708/Art-drawing-tree-earth-green_1600x900.jpg"
    const api_1st_call = await fetch(`https://trefle.io/api/plants?q=${common_name}&complete_data=true&token=${API_KEY}`)
    const data = await api_1st_call.json()
    if(data[0]){
      const api_2nd_call = await fetch(`https://trefle.io/api/plants/${data[0].id}?token=${API_KEY}`)
      const data_specific = await api_2nd_call.json()
      if(common_name && data[0]){
        this.setState({
          id: data_specific.id,
          common_name: data_specific.main_species.common_name,
          scientific_name: data_specific.scientific_name,
          image: data_specific.images[0] !== undefined ? data_specific.images[0].url : default_img,
          visible_caption: true,
          isLoaded: true,
          error: undefined
        })
      } else {
        this.setState({
          error: "Please enter a value"
        })
      }
    } else {
      this.setState({
        error: "Sorry, nothing was found. Please make another research."
      })
    }
  }

  render() {
    const { id, common_name, scientific_name, image, error, visible_caption, isLoaded } = this.state
    return (
      <div className="search">
        <SearchForm getPlant={this.getPlant} />

        <div className="search-result">
          {!error ? (
            <PlantCard
              id={id}
              common_name={common_name}
              scientific_name={scientific_name}
              image={image}
              error={error}
              visible_caption={visible_caption}
            />
          ) : (
            <div>{error && <p className="plantCard-error">{error}</p>}</div>
          ) }
          
        </div>
      </div>
    );
  }
}

export default Search