import React from 'react';

import { Link } from 'react-router-dom'

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

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getPlant = async e => {
    finalResult = []
    e.preventDefault()
    const common_name = e.target.common_name.value
    const default_img = "https://res.cloudinary.com/dsbgj0oop/image/upload/v1572516426/default_img.png"
    const api_1st_call = await fetch(`https://trefle.io/api/plants?q=${common_name}&complete_data=true&token=${API_KEY}`)
    const data = await api_1st_call.json()
    
    if(data[0]){
      if(common_name && data[0]){
        for (let i=0; i < data.length; i++) {
          const api_2nd_call = await fetch(`https://trefle.io/api/plants/${data[i].id}?token=${API_KEY}`)
          const data_plant = await api_2nd_call.json()
          const species = data_plant.main_species ? data_plant.main_species.common_name:'undefined'
          const randImage = data_plant.images[0] !== undefined ? data_plant.images[this.getRandomInt(data_plant.images.length)].url : default_img
          finalResult.push({id: data_plant.id, common_name: species, scientific_name:data_plant.scientific_name, image: randImage})
        } if (finalResult.length > 1) {
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
    return (
      <div className="search">
        <SearchForm getPlant={this.getPlant} />
        <p className={visible_caption? "plantCard-error":"plantCard-error invisible"}>{`${finalResult.length} plants found.`} <span className={scrollClass}>Please scroll to watch all the results !</span></p>
        <div className="search-result">
          {!error ? (
            <>
            {finalResult.map(item =>(
              <Link to={`/plants/${item.id}`}>
                <PlantCard
                  key={item.id}
                  common_name={item.common_name}
                  scientific_name={item.scientific_name}
                  image={item.image}
                  error={error}
                  visible_caption={visible_caption}
                  oneItemResult={oneItemResult}
                />
              </Link>
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