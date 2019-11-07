import React from 'react';

import '../style/GardenList.scss'


const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class GardenList extends React.Component {

  state = {
    plantsAdded: [],
    displayGarden: 'grid'
  }

  componentDidMount() {
    this.getPlant()
  }

  getPlant = async () => {
    if (localStorage.ids !== undefined) {
      const localStorageData = JSON.parse(localStorage.ids)
      let toRender = []
      for (let i = 0; i < localStorageData.length; i++) {
        const api_call = await fetch(`https://trefle.io/api/plants/${localStorageData[i]}?token=${API_KEY}`)
        const data = await api_call.json()
        toRender.push(data)
      }
      this.setState({ plantsAdded: toRender })
    } else {
      return null
      // console.log("do something if nothing")
    }
  }

  theRender = () => {
    return (
      this.state.plantsAdded.map((obj, index) => (
        <figure key={index} className='card' style={{ background: `url(${obj.images.length > 0 ? obj.images[Math.floor(Math.random() * obj.images.length)].url : 'https://res.cloudinary.com/dsbgj0oop/image/upload/v1572516426/default_img.png'})`, backgroundSize: 'cover' }}>
          <div className='names-wrapper'>
            <h3>{obj.common_name}</h3>
            <h3><em>{obj.scientific_name}</em></h3>
          </div>
        </figure>
      )))
  }

  ChangeDisplayGarden = () => {
    this.setState(() => ({
      displayGarden: this.state.displayGarden === 'grid' ? 'list' : 'grid'
    }))
  }

  render() {
    console.log(this.state.displayGarden)
    return (
      <div className='bigWrapper'>

        <button onClick={this.ChangeDisplayGarden}>{this.state.displayGarden === 'grid' ? 'list' : 'grid'}</button>

        <div className={this.state.displayGarden}>
          {this.state.plantsAdded.length > 0 && this.theRender()}
        </div>
      </div>
    )
  }
}

export default GardenList;