import React from 'react';

import { Link } from 'react-router-dom' 

import iconAdd from '../icon-plus.svg';
import './style/PlantCard.scss';

class PlantCard extends React.Component {
 componentDidMount() {
    if (localStorage.getItem('ids') === null) {
      //...
      localStorage.setItem('ids', JSON.stringify([]));
    }
  }

  addIdToLocalStorge = e => {
    this.classAdd()
    console.log('anim')
    const ids = JSON.parse(localStorage.getItem('ids'));
    ids.push(this.props.id);
    localStorage.setItem('ids', JSON.stringify(ids));
    this.props.counter()
  };

  classAdd = () => {
    const element = document.getElementById("idnotif");
    const element2 = document.getElementById("idnotifMobile");
    console.log('BEFORE anim notif navBar', element)
    console.log('BEFORE anim notif navBarMobile', element2)
    if (element) {
      element.classList.add('bounce-top')
      setTimeout(() => {
        element.classList.remove('bounce-top')
      }, 600)
    }
    if (element2) {
      element2.classList.add('bounce-top')
      setTimeout(() => {
        element2.classList.remove('bounce-top')
      }, 600)
    }
    else {
      return null
    }
  }

  render() {
    return (
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
    );
  }
}

export default PlantCard;
