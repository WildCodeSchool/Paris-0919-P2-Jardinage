import React from 'react'

import Connect from './Connect'

import './style/PlantDetails.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class PlantDetails extends React.Component {
  state = {
    plant: null,
    plant_image: null
  }

  componentWillMount() {
    const handle = this.props.match.params.handle
    fetch(`https://trefle.io/api/plants/${handle}?token=${API_KEY}`)
    .then(data => data.json())
    .then((data) => {
      this.setState(() => ({ 
        plant: data,
        plant_image: data.images ? true : false
      }))
    })
  }
  
  render(){
    return(
    <>
      <Connect />
      <div class="PlantDetails">
        <div class="Plant__header">
          <div class="Plant__title">
            <div class="Plant__main_title">{this.state.plant && this.state.plant.common_name}</div>
            <div class="Plant__latin_title">{this.state.plant && this.state.plant.scientific_name}</div>
            <button class="Plant__add_flower">ADD TO GARDEN</button>
          </div>
          <div class="Plant__image">
            <img 
                src={this.state.plant_image && this.state.plant.images[0].url} 
                alt="Plant picture"
            />
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default PlantDetails