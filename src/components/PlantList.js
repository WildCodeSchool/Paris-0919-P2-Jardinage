import React from 'react';
import plant1 from '../plant1.jpg';
import plant2 from '../plant2.jpg';
import plant3 from '../plant3.jpg';
import plant4 from '../plant4.jpg';

import PlantCard from './PlantCard';

import '../App.scss';
import './style/PlantList.scss'
import './style/PlantCard.scss'

function PlantList() {
  return (
    <div id="plantList">
      <section className="plantList--section">
        <h2>Popular plants</h2>
        <div>
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
        </div>
      </section>
      <section className="plantList--section seasonal">
        <h2>Seasonal plants</h2>
        <div className="plantList-seasonal">
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
        </div>
      </section>
      
      {/* <div id="suggestTitle"><h2>Popular plants</h2></div>
      <section className="plantList--popcontainer">
        <article>
          <img src={plant1} alt=""/>
          <p></p>
        </article>
        <article><img src={plant2} alt=""/></article>
        <article><img src={plant3} alt=""/></article>
        <article><img src={plant4} alt=""/></article>
        <article><img src={plant2} alt=""/></article>
        <article><img src={plant1} alt=""/></article>
        <article><img src={plant4} alt=""/></article>
        <article><img src={plant3} alt=""/></article>
      </section> */}
    </div>
  );
}

export default PlantList;
