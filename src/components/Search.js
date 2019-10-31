import React from 'react'

import PlantCard from './PlantCard'
import SearchForm from './SearchForm'

import '../App.scss'
import './style/searchBar.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"
let finalResult = []

class Search extends React.Component {
  state = { 
    id: undefined,
    common_name: undefined,
    scientific_name: undefined,
    image: undefined,
    error: undefined,
    visible_caption: false,
    isLoaded: false,
    oneItemResult: false
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
    // const idTen = data.filter((item, index) => index < 11)
    
    if(data[0]){
      for (let i=0; i < data.length; i++) {
        const api_2nd_call = await fetch(`https://trefle.io/api/plants/${data[i].id}?token=${API_KEY}`)
        const data_plant = await api_2nd_call.json()
        const species = data_plant.main_species ? data_plant.main_species.common_name:'undefined'
        if(common_name && data[0]){
          if (data.length === 1) {
            this.setState({
              id: data_plant.id,
              common_name: species,
              scientific_name: data_plant.scientific_name,
              image: data_plant.images[0] !== undefined ? data_plant.images[this.getRandomInt(data_plant.images.length)].url : default_img,
              visible_caption: true,
              isLoaded: true,
              error: undefined,
              oneItemResult: true
            }, () => {
              finalResult.push(this.state)
            })
          } else {
            this.setState({
              id: data_plant.id,
              common_name: species,
              scientific_name: data_plant.scientific_name,
              image: data_plant.images[0] !== undefined ? data_plant.images[this.getRandomInt(data_plant.images.length)].url : default_img,
              visible_caption: true,
              isLoaded: true,
              error: undefined,
              oneItemResult: false
            }, () => {
              finalResult.push(this.state)
            })
          }
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
                oneItemResult={item.oneItemResult}
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

export default Search