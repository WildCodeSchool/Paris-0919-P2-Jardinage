import React from 'react'

import plant1 from '../plant1.jpg'
import './style/PlantCard.scss'

const PlantCard = () => (
  <article className="plantCard">
    <img src={plant1} alt="" />
    <p className="subtitle">Blabla blibli blou blou</p>
  </article>
)
    
export default PlantCard