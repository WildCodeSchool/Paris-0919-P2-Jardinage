import React from 'react';

import PlantCard from './PlantCard';

import '../App.scss';
import './style/PlantList.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"
const plants = [
  { id: 141569 },
  { id: 131368 },
  { id: 111119 },
  { id: 105072 },
  { id: 145216 },
  { id: 166663 },
  { id: 125336 },
  { id: 175878 },
  { id: 139838 },
  { id: 158107 },
  { id: 174523 },
  { id: 175722 }
]

const plantsData = []

class PlantList extends React.Component {
  state = {
    id: undefined,
    common_name: undefined,
    scientific_name: undefined,
    image: undefined,
    isLoaded: false
  }

  getPlant = async () => {
    for (let i=0; i < plants.length; i++) {
      const api_call = await fetch(`https://trefle.io/api/plants/${plants[i].id}?token=${API_KEY}`)
      const data = await api_call.json()      
      const imgLen = data.images ? data.images.length - 1 : 'none'
      const species = data.main_species ? data.main_species.common_name:'undefined' 
      if (imgLen !== 'none'){          
        plantsData.push({id: data.id, common_name: species, scientific_name: data.scientific_name, image: data.images[imgLen].url})
      }
    }
    
    this.setState({
      id: plantsData.id,
      common_name: plantsData.species,
      scientific_name: plantsData.scientific_name,
      image: plantsData.image,
      isLoaded: true
    })
  }

  componentDidMount = () => {
    this.getPlant()
  }
  
  render() { 
    return (
      <>
      {!this.state.isLoaded ? (
        <div className="plant-loader"></div>
      ) : (
        <div id="plantList">
          <section className="plantList--section">
            <h2>Popular plants</h2>
            <div className="plantCard--container">
              {plantsData.filter((elt, ind)=> ind < 6).map((item)=> (
                <PlantCard
                  key={item.id}
                  common_name={item.common_name}
                  scientific_name={item.scientific_name}
                  image={item.image}
                />
              ))}
            </div>
          </section>
          <section className="plantList--section">
            <h2>Seasonal plants</h2>
            <div className="plantCard--container">
              {plantsData.filter((elt, ind)=> ind >= 6).map(item => (
                <PlantCard
                  key={item.id}
                  common_name={item.common_name}
                  scientific_name={item.scientific_name}
                  image={item.image}
                />
              ))}
            </div>
          </section>
        </div>
      )}
      </>
    );
  }
}

export default PlantList;