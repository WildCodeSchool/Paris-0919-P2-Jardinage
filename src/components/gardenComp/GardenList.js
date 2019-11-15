import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../style/GardenList.scss'

// const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09"

class GardenList extends React.Component {

  state = {
    displayGarden: 'grid'
  }

  componentDidUpdate(prevprops) {
    if (this.props.plantsAdded.length !== prevprops) {
      this.theRender()
    }
  }


  theRender = () => {
    if (this.state.displayGarden === 'grid') {
      return (
        this.props.plantsAdded.map((obj, index) => (
          <figure key={index} className='card' style={{ backgroundImage: `url(${obj.images.length > 0 ? obj.images[0].url : 'https://res.cloudinary.com/dsbgj0oop/image/upload/v1572516426/default_img.png'})`, backgroundSize: 'cover', backgroundRepeat: 'noRepeat' }}>
            <Link to={`/plants/${obj.id}`}>
            <div className='names-wrapper'>
              <h3>{obj.common_name}</h3>
              <h3><em>{obj.scientific_name}</em></h3>
            </div>
            </Link>
            <FontAwesomeIcon className="fa-trash-alt" icon={faTrashAlt}
              onClick={() => this.props.handleDeletePlant(index)}
              />
          </figure>
        ))
      )
    }
    else if (this.state.displayGarden === 'list') {
      return (
        this.props.plantsAdded.map((obj, index) => (
          <figure key={index} className='card'>
              <div className='names-wrapper'>
              <Link to={`/plants/${obj.id}`}>
                <h3>{obj.common_name}</h3>
                <h3><em>{obj.scientific_name}</em></h3>
                </Link>
                <FontAwesomeIcon className="fa-trash-alt" icon={faTrashAlt}
                  onClick={() => this.props.handleDeletePlant(index)}
                  />
              </div>
            </figure>
        ))
      )
    }
  }

  ChangeDisplayGarden = () => {
    this.setState(() => ({
      displayGarden: this.state.displayGarden === 'grid' ? 'list' : 'grid'
    }))
  }

  render() {
    return (
      <div className='bigWrapper'>
        <button onClick={this.ChangeDisplayGarden} className='garden_button'>{this.state.displayGarden === 'grid' ? 'List' : 'Grid'}</button>

        <div className={this.state.displayGarden}>
          {this.props.plantsAdded.length > 0 && this.theRender()}
        </div>
      </div>
    )
  }
}

export default GardenList;