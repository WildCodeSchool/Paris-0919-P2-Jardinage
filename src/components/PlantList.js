import React from 'react';

import PlantCard from './PlantCard';

import '../App.scss';
import './style/PlantList.scss'
import './style/PlantCard.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"
const plants = [
  {
    id: 131368
  },
  {
    id: 141569
  },
  {
    id: 166663
  },
  {
    id: 192303
  },
  {
    id: 125336
  },
  {
    id: 175878
  },
  {
    id: 158107
  },
  {
    id: 139838
  }
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

  getPlant = () => {
    for (let i=0; i < plants.length; i++) {
      fetch(`https://trefle.io/api/plants/${plants[i].id}?token=${API_KEY}`)
      .then(dataRes => {
        return dataRes.json()
      })
      .then(data =>{         
        const imgLen = data.images ? data.images.length - 1 : 'none'
        const species = data.main_species ?data.main_species.common_name:'undefined' 
        // if(imgLen) {...}  <= si imgLen = 0  alors imgLen = false donc on rentre pas dans les instructions
        if (imgLen != 'none'){          
          this.setState({
            id: data.id,
            common_name: species,
            scientific_name: data.scientific_name,
            image: data.images[imgLen].url
          }, _=> {
            if (i <= 3) {
              popPlants.push(this.state)
            } else {
              seasonalPlants.push(this.state)
            }
          })
        }
      })
    }
  }

  componentDidMount() {
    this.getPlant()
    console.log();
    
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
