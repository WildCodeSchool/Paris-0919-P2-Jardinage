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
    visible_caption: false
  }

  getPlant = async e => {
    e.preventDefault()
    const common_name = e.target.common_name.value
    console.log(common_name)
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
          error: undefined,
          visible_caption: true
        })
      } else {
        this.setState({
          id: undefined,
          common_name: undefined,
          scientific_name: undefined,
          image: undefined,
          visible_caption: undefined,
          error: "Please enter a value"
        })
      }
    } else {
      this.setState({
        id: undefined,
        common_name: undefined,
        scientific_name: undefined,
        image: undefined,
        visible_caption: undefined,
        error: "Nothing was found"
      })
    }
  }

  render() {
    const { id, common_name, scientific_name, image, error } = this.state
    return (
      <div className="search">
        <SearchForm getPlant={this.getPlant} />
        <div className="search-result">
          <PlantCard
            id={this.state.id}
            common_name={this.state.common_name}
            scientific_name={this.state.scientific_name}
            image={this.state.image}
            error={this.state.error}
            visible_caption={this.state.visible_caption}
          />
        </div>
      </div>
    );
  }
}

export default Search