import React from 'react';
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
    const ids = JSON.parse(localStorage.getItem('ids'));
    ids.push(this.props.id);
    localStorage.setItem('ids', JSON.stringify(ids));
    this.props.counter()
  };

  render() {
    return (
      <figure
        className={this.props.oneItemResult ? 'plantCard lonely' : 'plantCard'}
      >
        {this.props.image && this.props.common_name && (
          <img
            className="plantCard-img"
            src={this.props.image}
            alt={this.props.common_name}
          />
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
