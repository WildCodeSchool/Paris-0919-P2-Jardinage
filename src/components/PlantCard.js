import React from 'react'

import './style/PlantCard.scss'

const PlantCard = props => (
  <figure className="plantCard">
    <img src={props.image} alt={props.common_name} />
    <figcaption className="subtitle">
      <strong>{props.common_name}</strong>
      <em>{props.scientific_name}</em>
    </figcaption>
  </figure>
)
    
export default PlantCard