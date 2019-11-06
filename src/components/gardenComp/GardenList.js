import React from 'react';

import '../style/GardenList.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class GardenList extends React.Component {

  state = {
    plantsAdded: [],
    // lsIDSLength : ''
  }

  componentDidMount() {
    this.getPlant()
    // this.lengthCheck()
  }

  // componentDidUpdate() {
  //   const localStorageData = JSON.parse(localStorage.ids)
  //   if (localStorageData !== this.state.lsIDSLength ) {
  //     this.getPlant()
  //   this.test()
  //   }
  

  // lengthCheck = () => {
  //   const localStorageData = JSON.parse(localStorage.ids)
  //   this.setState({lsIDSLength : localStorageData.length})
  // }

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
      console.log("yoyo")
    }
  }

  theRender = () => {
    return (
      this.state.plantsAdded.map((obj, index) => (
        <figure key={index} className='card' style={{ background: `url(${obj.images ? obj.images[0].url : 'imagebidon.jpg'})`, backgroundSize: 'cover' }}>
        <div className='names-wrapper'>
          <h3>{obj.common_name}</h3>
          <h3>{obj.scientific_name}</h3>
          </div>
        </figure>
      )))
  }

  render() {
    console.log(this.state.lsIDSLength)
    return (
      <div className='grid blocks'>

        {this.state.plantsAdded.length > 0 && this.theRender()}

      </div>
    )
  }
}

export default GardenList;