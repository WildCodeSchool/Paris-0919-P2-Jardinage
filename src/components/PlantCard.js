import React from 'react'

import plant1 from '../plant1.jpg'
import './style/PlantCard.scss'

const PlantCard = () => (
  <figure className="plantCard">
    <img src={plant1} alt="" />
    <figcaption className="subtitle">Blabla blibli blou blou</figcaption>
  </figure>
)
    
export default PlantCard