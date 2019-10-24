import React from 'react'
import iconAdd from '../icon-plus.svg'
import './style/PlantCard.scss'

const PlantCard = props => (
  <figure className="plantCard">
    <img className="plantCard-img" src={props.image} alt={props.common_name} />
    <figcaption className="subtitle">
      <strong>{props.common_name}</strong>
      <em>{props.scientific_name}</em>
      <img className="plantCard-icon" src={iconAdd} alt="icon add" />
    </figcaption>
  </figure>
)
    
export default PlantCard