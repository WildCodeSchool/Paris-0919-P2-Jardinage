import React from "react";

import PlantCard from "./PlantCard";

import "../App.scss";
import "./style/PlantList.scss";
import "./style/PlantCard.scss";

const API_KEY = "YjlIUlp5QktVcXRIZTEzVGNMSmlOZz09";
const plants = [
  { id: 141569 },
  { id: 131368 },
  { id: 111119 },
  { id: 105072 },
  { id: 145216 },
  { id: 166663 },
  { id: 125336 },
  { id: 175878 },
  { id: 139838 },
  { id: 158107 },
  { id: 174523 },
  { id: 175722 }
];

let plantsData = [];

class PlantList extends React.Component {
  state = {
    isLoaded: false, 
    visible_caption: false
  };

  getPlant = async () => {
    for (let i = 0; i < plants.length; i++) {
      const api_call = await fetch(
        `https://trefle.io/api/plants/${plants[i].id}?token=${API_KEY}`
      );
      const data = await api_call.json();
      const imgLen = data.images ? data.images.length - 1 : "none";
      const species = data.main_species
        ? data.main_species.common_name
        : "undefined";
      if (imgLen !== "none") {
        plantsData.push({
          id: data.id,
          common_name: species,
          scientific_name: data.scientific_name,
          image: data.images[imgLen].url
        });
      }
    }
    this.setState({
      isLoaded: true,
      visible_caption: true
    });
  };

  componentDidMount = () => {
    plantsData = [];
    this.getPlant();
  };

  render() {
    const { isLoaded, visible_caption } = this.state
    return (
      <>
        {!isLoaded ? (
          <div className="plant-loader"></div>
        ) : (
          <div id="plantList">
            <section className="plantList--section">
              <h2>Popular plants</h2>
              <div className="plantCard--container">
                {plantsData
                  .filter((elt, ind) => ind < 6)
                  .map(item => (
                    <PlantCard
                      addClass={this.props.addClass}
                      key={item.id}
                      id={item.id}
                      common_name={item.common_name}
                      scientific_name={item.scientific_name}
                      image={item.image}
                      counter={this.props.counter}
                      logged={this.props.logged}
                      visible_caption={visible_caption}
                    />
                  ))}
              </div>
            </section>
            <section className="plantList--section">
              <h2>Seasonal plants</h2>
              <div className="plantCard--container">
                {plantsData
                  .filter((elt, ind) => ind >= 6)
                  .map(item => (
                    <PlantCard
                      addClass={this.props.addClass}
                      key={item.id}
                      id={item.id}
                      common_name={item.common_name}
                      scientific_name={item.scientific_name}
                      image={item.image}
                      counter={this.props.counter}
                      logged={this.props.logged}
                      visible_caption={visible_caption}
                    />
                  ))}
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}

export default PlantList;
