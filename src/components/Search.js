import React from 'react';

import iconSearch from '../icon-search.svg'

import PlantCard from './PlantCard';

import '../App.scss';
import './style/searchBar.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class SearchBar extends React.Component {
  state = { 
    id: undefined,
    common_name: undefined,
    scientific_name: undefined,
    image: undefined,
    error: undefined 
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }
  getPlant = async e => {
    e.preventDefault()
    const common_name = e.target.elements.common_name.value
    const default_img = "https://image.freepik.com/vecteurs-libre/dessin-anime-plantes-pot_18591-43973.jpg"
    const api_1st_call = await fetch(`https://trefle.io/api/plants?q=${common_name}&complete_data=true&token=${API_KEY}`)
    const data = await api_1st_call.json()
    data.setHeader('Access')
    if(data[0]){
      const api_2nd_call = await fetch(`https://trefle.io/api/plants/${data[0].id}?token=${API_KEY}`)
      const data_specific = await api_2nd_call.json()
      if(common_name && data[0]){
        this.setState({
          id: data_specific.id,
          common_name: data_specific.main_species.common_name,
          scientific_name: data_specific.scientific_name,
          image: data_specific.images[0] !== undefined ? data_specific.images[0].url : default_img,
          error: undefined 
        })
      } else {
        this.setState({
          id: undefined,
          common_name: undefined,
          scientific_name: undefined,
          image: undefined,
          error: "Please enter a value"
        })
      }
    } else {
      this.setState({
        id: undefined,
        common_name: undefined,
        scientific_name: undefined,
        image: undefined,
        error: "Nothing was found"
      })
    }
  }

  render() {
    return (
      <div>
        <div id="searchBar">
          <form onSubmit={this.getPlant}>
            <label><h2>What do you want to plant today ?</h2></label>
            <input 
              type="text" 
              // value={this.state.value} 
              // onChange={this.handleChange} 
              placeholder="Search" 
            />
            <img className="search--icon" src={iconSearch} alt="icon add" />
          </form>
        </div>
        <div className="search--result">
          <PlantCard
            id={this.state.id}
            common_name={this.state.common_name}
            scientific_name={this.state.scientific_name}
            image={this.state.image}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;