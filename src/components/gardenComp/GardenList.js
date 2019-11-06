import React from 'react';

import '../style/GardenList.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

let localStorageData = localStorage.email
//ci-dessous voué à être remplacé par data du local storage ci-dessus
const dataMytho = [
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

class GardenList extends React.Component {

  state = {
    plantsAdded: []
  }

  componentDidMount() {
    this.getPlant()
  }

  getPlant = async () => {
    let toRender = []
    for (let i = 0; i < dataMytho.length; i++) {
      const api_call = await fetch(`https://trefle.io/api/plants/${dataMytho[i].id}?token=${API_KEY}`)
      const data = await api_call.json()
      console.log(data)
      toRender.push(data)
    }
    this.setState({ plantsAdded: toRender })
    console.log('ça marche ou quoi!!?', this.state.plantsAdded)
  }

  theRender = () => {
    return (
      this.state.plantsAdded.map((obj, index) => (
        <figure key={index} className='card'>
          <h2>{obj.common_name}</h2>
        </figure>
      )
      )
    )
  }

  render() {
    console.log('ici', localStorageData)
    return (
      <div>

        {this.state.plantsAdded.length > 0 && this.theRender()}

      </div>
    )
  }

}

export default GardenList;