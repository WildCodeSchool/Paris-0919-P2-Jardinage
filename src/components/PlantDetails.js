import React from 'react'

import NavBar from './NavBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faClock, faTree, faRuler, faSpa } from '@fortawesome/free-solid-svg-icons'

import './style/PlantDetails.scss'

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class PlantDetails extends React.Component {
  state = {
    plant: null,
    plant_image: null
  }

  componentDidMount() {
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

    const plant = this.state.plant // declare a var to save "this.state.plant" in order to repeat less

    return(
    <>
      <NavBar />
      <div class="PlantDetails">
        {/*  HEADER */}

        <div class="Plant__header">
          <div class="Plant__image">
            <img 
              src={this.state.plant_image && plant.images[0] ? plant.images[0].url : "https://res.cloudinary.com/dsbgj0oop/image/upload/v1572516426/default_img.png"} 
              alt="Plant picture"
            />
          </div>
          <div class="Plant__title">
            <div class="Plant__main_title">{plant && plant.common_name}</div>
            <div className="Plant__subtitle">
              <div class="Plant__latin_title">{plant && plant.scientific_name}</div>
              <button class="Plant__add_flower">ADD TO GARDEN</button>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="Plant__body">
          <h2>Caracteristics</h2>
          <table className="Plant__specs">
            <tbody>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faClock}/></span>Duration</td>
                <td>{plant && plant.duration}</td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faTree}/></span>Family name</td>
                <td>{plant && plant.family_common_name}</td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faRuler}/></span> Mature height</td>
                <td>{plant && (plant.main_species.specifications.mature_height.cm).toFixed(2)} cm</td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faLeaf}/></span>Foliage color</td>
                <td>{plant && plant.main_species.foliage.color}</td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faSpa}/></span>Flower color</td>
                <td>{plant && plant.main_species.flower.color}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
    )
  }
}

export default PlantDetails