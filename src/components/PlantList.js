import React from 'react';
import plant1 from '../plant1.jpg';
import plant2 from '../plant2.jpg';
import plant3 from '../plant3.jpg';
import plant4 from '../plant4.jpg';
import '../App.scss';
import './style/PlantList.scss'

function PlantList() {
  return (
    <div id="plantList">
      <div id="suggestTitle"><h2>Popular plants</h2></div>
      <section className="plantList--container">
        <article><img src={plant1} alt=""/></article>
        <article><img src={plant2} alt=""/></article>
        <article><img src={plant3} alt=""/></article>
        <article><img src={plant4} alt=""/></article>
        <article><img src={plant2} alt=""/></article>
        <article><img src={plant1} alt=""/></article>
        <article><img src={plant4} alt=""/></article>
        <article><img src={plant3} alt=""/></article>
        <article><img src={plant4} alt=""/></article>
        <article><img src={plant1} alt=""/></article>
      </section>
    </div>
  );
}

export default PlantList;
