import React from 'react'

import NavBar from './NavBar'
import NavMobile from './NavMobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faClock, faTree, faRuler, faSpa, faChartLine, faHourglass, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

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

  render() {

    const plant = this.state.plant // declare a var to save "this.state.plant" in order to repeat less

    return (
      <>
        <NavBar />
        <div class="PlantDetails">
          {/*  HEADER */}

          <div class="Plant__header">
            <div class="Plant__image">
              <img
                src={this.state.plant_image && plant.images[0] ? plant.images[0].url : "https://res.cloudinary.com/dsbgj0oop/image/upload/v1572516426/default_img.png"}
                alt="Plant"
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

          <p class="Plant__data_info">{plant && plant.main_species && plant.main_species.complete_data ? "" : "The data about this plant might be incomplete :("}</p>

          {/* BODY */}
          <div className="Plant__body">
            <h2>Caracteristics</h2>
            <table className="Plant__specs">
              <tbody>
                <tr className="Plant__specs--line">
                  <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faClock} /></span>Duration</td>
                  <td>{plant && plant.duration ? plant.duration : "No data :("}</td>
                </tr>
                <tr className="Plant__specs--line">
                  <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faHourglass} /></span>Lifespan</td>
                  <td>{plant && plant.main_species.specifications.lifespan ? plant.main_species.specifications.lifespan : "No data :("}</td>
                </tr>
                <tr className="Plant__specs--line">
                  <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faTree} /></span>Family name</td>
                  <td>{plant && plant.family_common_name ? plant.family_common_name : "No data :("}</td>
                </tr>
                <tr className="Plant__specs--line">
                  <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faRuler} /></span> Mature height</td>
                  <td>{plant && plant.main_species.specifications.mature_height.cm ? `${plant.main_species.specifications.mature_height.cm.toFixed(2)} cm` : "No data :("} </td>
                </tr>
                <tr className="Plant__specs--line">
                  <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faChartLine} /></span> Growth rate</td>
                  <td>{plant && plant.main_species.specifications.growth_rate ? plant.main_species.specifications.growth_rate : "No data :("}</td>
                </tr>
                <tr className="Plant__specs--line">
                  <td><span className="Plant__specs_icon"><FontAwesomeIcon icon={faSkullCrossbones} /></span> Toxicity</td>
                  <td>{plant && plant.main_species.specifications.toxicity ? plant.main_species.specifications.toxicity : "No data :("}</td>
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
                  <span><FontAwesomeIcon icon={faSpa} /></span>
                </div>
                <div class="Plant__card_body">
                  {plant && plant.main_species && plant.main_species.flower && plant.main_species.flower.color ? plant.main_species.flower.color : "No data :("}
                </div>
              </div>
              <div class="Plant__card">
                <div class="Plant__card_title">
                  Flower color
              </div>
                <div class="Plant__card_icon">
                  <span><FontAwesomeIcon icon={faLeaf} /></span>
                </div>
                <div class="Plant__card_body">
                  {plant && plant.main_species && plant.main_species.foliage && plant.main_species.foliage.color ? plant.main_species.foliage.color : "No data :("}
                </div>
              </div>
            </div>

            {/* BODY TIPS  <- this container might be refactored */}

            {((plant && plant.main_species && plant.main_species.growth && plant.main_species.growth.temperature_minimum && plant.main_species.growth.temperature_minimum.deg_c) || (plant && plant.main_species && plant.main_species.growth && plant.main_species.growth.drought_tolerance) || ((plant && plant.main_species && plant.main_species.soils_adaptation) && (plant.main_species.soils_adaptation.medium || plant.main_species.soils_adaptation.fine || plant.main_species.soils_adaptation.coarse)) || (plant && plant.main_species && plant.main_species.seed && plant.main_species.seed.bloom_period)) &&

              <div className="Tips__container">
                <h2>Tips</h2>
                {(plant && plant.main_species && plant.main_species.growth && plant.main_species.growth.temperature_minimum && plant.main_species.growth.temperature_minimum.deg_c) &&
                  <div className="Tip">
                    Your seed is able to resist a maximum negative temperature of <span>{plant.main_species.growth.temperature_minimum.deg_c &&
                      `${(plant.main_species.growth.temperature_minimum.deg_c).toFixed(0)} ° (celsius)`}</span>
                  </div>
                }

                {(plant && plant.main_species && plant.main_species.growth && plant.main_species.growth.drought_tolerance) &&
                  <div className="Tip">
                    Be sure to water your plant when needed, it has a <span>{plant.main_species.growth.drought_tolerance &&
                      plant.main_species.growth.drought_tolerance}</span> drought tolerance.
              </div>
                }

                {(plant && plant.main_species && plant.main_species.soils_adaptation) && (plant.main_species.soils_adaptation.medium || plant.main_species.soils_adaptation.fine || plant.main_species.soils_adaptation.coarse) &&
                  <div className="Tip">Your seed is adapted to
                <span>{plant.main_species.soils_adaptation.medium && "- medium soil"}</span>
                    <span>{plant.main_species.soils_adaptation.fine && "- fine soil"}</span>
                    <span>{plant.main_species.soils_adaptation.coarse && "- coarse soil"}</span>
                  </div>
                }

                {(plant && plant.main_species && plant.main_species.seed && plant.main_species.seed.bloom_period) && <div className="Tip">If you plant your seeds correctly, your plant should be blooming around <span>{plant.main_species.seed.bloom_period}</span></div>}
              </div>

            }
          </div>
        </div>
        <NavMobile />
      </>
    )
  }
}

export default PlantDetails