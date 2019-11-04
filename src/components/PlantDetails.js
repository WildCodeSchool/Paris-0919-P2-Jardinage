import React from 'react'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class PlantDetails extends React.Component {
  state = {
    plant: null,
  }

  componentDidMount() {
    const handle = this.props.match.params.handle
    fetch(`https://trefle.io/api/plants/${handle}?token=${API_KEY}`)
    .then(data => data.json())
    .then((data) => {
      this.setState(() => ({ plant: data }))
    })
  }
  

  render(){
    return(
      <h1>l'ID est {this.state.plant ? this.state.plant.id : "NO ID MAN"}</h1>
    )
  }
}

export default PlantDetails