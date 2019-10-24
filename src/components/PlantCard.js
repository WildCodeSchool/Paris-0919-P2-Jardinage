import React from 'react'

import './style/PlantCard.scss'

const PlantCard = props => (
  <figure className="plantCard">
    <img src={props.image} alt={props.common_name} />
    <figcaption className="subtitle">{props.common_name}{props.scientific_name}</figcaption>
  </figure>
)
    
export default PlantCard