import React from 'react';

import PlantCard from './PlantCard';

import '../App.scss';
import './style/PlantList.scss'
import './style/PlantCard.scss'

// YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxNDYwLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU3MzEyMjg1MiwiaWF0IjoxNTczMTE1NjUyLCJpc3MiOiJKb2tlbiIsImp0aSI6IjJuYWQ4bWYzcnFjM2pmbnYwMGRkcjFxMiIsIm5iZiI6MTU3MzExNTY1Mn0.2MyarZvGgt5oooz368yA2Y9jcRJ2Lj1yFdnGDjF5giM"
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
  { id: 175722 },
  { id: 192303 }
]

const seasonalPlants = []
const popPlants = []

class PlantList extends React.Component {
  state = {
    id: undefined,
    common_name: undefined,
    scientific_name: undefined,
    image: undefined
  }

  getPlant = async () => {
    for (let i=0; i < plants.length; i++) {
      const api_call = await fetch(`https://trefle.io/api/plants/${plants[i].id}?token=${API_KEY}`)
      const data = await api_call.json()      
      const imgLen = data.images ? data.images.length - 1 : 'none'
      const species = data.main_species ?data.main_species.common_name:'undefined' 
      // if(imgLen) {...}  <= si imgLen = 0  alors imgLen = false donc on rentre pas dans les instructions
      if (imgLen !== 'none'){          
        this.setState({
          id: data.id,
          common_name: species,
          scientific_name: data.scientific_name,
          image: data.images[imgLen].url
        }, ()=> {
          if (i < plants.length / 2-1) {
            popPlants.push(this.state)
          } else {
            seasonalPlants.push(this.state)
          }
        })
      }
    }
  }

  componentDidMount() {
    this.getPlant()
  }
  
  render() { 
    return (
      <div id="plantList">
        <section className="plantList--section">
          <h2>Popular plants</h2>
          <div className="plantCard--container">
            {popPlants.map(item => (
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
          {seasonalPlants.map(item => (
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
    );
  }
}

export default PlantList;
