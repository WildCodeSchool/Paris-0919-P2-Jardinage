import React from 'react';

import { Link } from 'react-router-dom'

import iconAdd from '../icon-plus.svg';
import './style/PlantCard.scss';

class PlantCard extends React.Component {
  state = {
    myClass :""
  }
  componentDidMount() {
    if (localStorage.getItem('ids') === null) {
      //...
      localStorage.setItem('ids', JSON.stringify([]));
    }
  }

  addIdToLocalStorge = e => {
    this.props.addClass()
    const ids = JSON.parse(localStorage.getItem('ids'));
    ids.push(this.props.id);
    localStorage.setItem('ids', JSON.stringify(ids));
    this.props.counter()
    this.deleteInfo()
  };

  deleteInfo = () => {
    const msg = document.getElementById("delete--message")
    msg.classList.add('msg-in')
    setTimeout(() => {
      msg.classList.remove('msg-in')
    }, 2000)
  }

  render() {
    return (
      <>
      <div id="delete--message" className="msg-off">
        You successfully added your plant
      </div>

      <figure
        className={this.props.oneItemResult ? 'plantCard lonely' : 'plantCard'}
      >
        {this.props.image && this.props.common_name && (
          <Link className="plantCard--link" to={`/plants/${this.props.id}`}>
            <img
              className="plantCard-img"
              src={this.props.image}
              alt={this.props.common_name}
            />
          </Link>
        )}
        <img
          className="plantCard-icon"
          src={iconAdd}
          alt="icon add"
          onClick={this.addIdToLocalStorge}
        />
        <figcaption
          className={this.props.visible_caption ? 'subtitle' : 'invisible'}
        >
          {this.props.common_name && <strong>{this.props.common_name}</strong>}
          {this.props.scientific_name && <em>{this.props.scientific_name}</em>}
        </figcaption>
      </figure>
      </>
    );
  }
}

export default PlantCard;
