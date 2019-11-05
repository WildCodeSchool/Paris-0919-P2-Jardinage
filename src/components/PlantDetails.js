import React from 'react'

import NavBar from './NavBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faClock, faTree, faRuler, faSpa, faChartLine } from '@fortawesome/free-solid-svg-icons'

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

        <p class="Plant__data_info">{plant && plant.main_species.complete_data ? "" : "The data about this plant might be incomplete :(" }</p>

        {/* BODY */}
        <div className="Plant__body">
          <h2>Caracteristics</h2>
          <table className="Plant__specs">
            <tbody>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faClock}/></span>Duration</td>
                <td>{plant && plant.duration ? plant.duration : "No data :("}</td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faTree}/></span>Family name</td>
                <td>{plant && plant.family_common_name ? plant.family_common_name : "No data :("}</td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faRuler}/></span> Mature height</td>
                <td>{plant && plant.main_species.specifications.mature_height.cm ? `${plant.main_species.specifications.mature_height.cm.toFixed(2)} cm` : "No data :("} </td>
              </tr>
              <tr className="Plant__specs--line">
                <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faChartLine}/></span> Growth rate</td>
                <td>{plant && plant.main_species.specifications.growth_rate ? plant.main_species.specifications.growth_rate : "No data :("}</td>
              </tr>
            </tbody>
          </table>

          {/* BODY CARDS */}
          <h2>Colors</h2>
          <div className="Plant__cards">
            <div class="Plant__card">
              <div class="Plant__card_title">
                Foliage color
              </div>
              <div class="Plant__card_icon">
                <span><FontAwesomeIcon icon={faSpa}/></span>
              </div>
              <div class="Plant__card_body">
                {plant && plant.main_species.flower.color ? plant.main_species.flower.color : "No data :("}
              </div>
            </div>
            <div class="Plant__card">
              <div class="Plant__card_title">
                Flower color
              </div>
              <div class="Plant__card_icon">
                <span><FontAwesomeIcon icon={faLeaf}/></span>
              </div>
              <div class="Plant__card_body">
                {plant && plant.main_species.foliage.color ? plant.main_species.foliage.color : "No data :("}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
    )
  }
}

export default PlantDetails