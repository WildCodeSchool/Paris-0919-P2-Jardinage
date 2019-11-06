import React from 'react';

import '../style/GardenList.scss'
import PlantCard from '../PlantCard';

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class GardenList extends React.Component {

  // state = {
  //   plantsAdded: [],
  // }

  componentDidMount() {
    this.props.getPlant()
  }

  // componentDidUpdate() {
  //   if (localStorage.ids !== undefined) {
  //     const localStorageData = JSON.parse(localStorage.ids)
  //     const prevState = this.state.plantsAdded
  //     if (localStorageData.length !== prevState.length) {
  //       this.getPlant()
  //     }
  //   }
  // }

  // getPlant = async () => {
  //   if (localStorage.ids !== undefined) {
  //   const localStorageData = JSON.parse(localStorage.ids)
  //   let toRender = []
  //   for (let i = 0; i < localStorageData.length; i++) {
  //     const api_call = await fetch(`https://trefle.io/api/plants/${localStorageData[i]}?token=${API_KEY}`)
  //     const data = await api_call.json()
  //     toRender.push(data)
  //   }
  //   this.setState({ plantsAdded: toRender })
  //   } 
  // }

  theRender = () => {
    console.log("props", this.props)
    return (
      this.props.newPlants.map((obj, index) => (
        <figure key={index} className='card' style={{ background: `url(${obj.images ? obj.images[0].url : 'imagebidon.jpg'})`, backgroundSize: 'cover' }}>
          <div className='names-wrapper'>
            <h3>{obj.common_name}</h3>
            <h3>{obj.scientific_name}</h3>
          </div>
        </figure>
      ))
    )
  }

  render() {
    // console.log(this.state.lsIDSLength)
    return (
      <div className='grid blocks'>
        {this.props.newPlants.length > 0 && this.theRender()}
      </div>
    )
  }
}

export default GardenList;