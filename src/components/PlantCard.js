import React from 'react'
import iconAdd from '../icon-plus.svg'
import './style/PlantCard.scss'

class PlantCard extends React.Component {

  componentDidMount() {
    localStorage.setItem("ids", JSON.stringify([]))
    
  }

  getId = () => {
    let numId = this.props.id


    localStorage.setItem('id', numId)
    console.log(numId)
  }

  render() {
    return (
      <figure className={this.props.oneItemResult ? "plantCard lonely":"plantCard"}>
        {this.props.image && this.props.common_name && <img className="plantCard-img" src={this.props.image} alt={this.props.common_name} />} 
        <img className="plantCard-icon" src={iconAdd} alt="icon add" onClick={this.getId} />
        <figcaption className={this.props.visible_caption ? "subtitle" : "invisible"}>
          {this.props.common_name && <strong>{this.props.common_name}</strong>} 
          {this.props.scientific_name && <em>{this.props.scientific_name}</em>}
        </figcaption>
      </figure>
    )
  }
}
    
export default PlantCard