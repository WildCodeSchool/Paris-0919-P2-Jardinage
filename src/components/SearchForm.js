import React from 'react'
import iconSearch from '../icon-search.svg'

import '../App.scss';
import './style/searchBar.scss'
import './style/PlantCard.scss'

const SearchForm = props => {
  return(
    <div className="searchBar">
      <form onSubmit={props.getPlant}>
        <label><h2>What do you want to plant today ?</h2></label>
        <button><img className="search--icon" src={iconSearch} alt="icon add" /></button>
        <input 
          type="text"
          name="common_name"
          // value={this.state.value} 
          // onChange={this.handleChange} 
          placeholder="Search" 
        />
      </form>
    </div>
  )
}

export default SearchForm