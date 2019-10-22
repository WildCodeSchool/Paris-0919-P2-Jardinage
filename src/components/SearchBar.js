import React from 'react';
import '../App.scss';
import './style/searchBar.scss'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Lance la recherche : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div id="searchBar">
                <form onSubmit={this.handleSubmit}>
                    <label><h2>What do you want to plant today ?</h2></label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
                </form>
            </div>
        );
    }
}

export default SearchBar;