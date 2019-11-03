import React from 'react';

import iconTree from '../icon-tree.svg'
import iconUser from '../icon-user.svg'

import '../App.scss';

class NavBar extends React.Component {
 
    logOut = (event) => {
        localStorage.removeItem('email');
      }

    render() {
        return (
            <div id="navBar">
                <ul className="header--title">
                    <li><img src={iconTree} alt="icon tree" /></li>
                    <li><h1>PlantMe</h1></li>
                </ul>
                <ul className="menu">
                    <li><a href="http://localhost:3000/">Garden</a></li>
                    <li><a href="http://localhost:3000/">Board</a></li>
                    <li><a href="http://localhost:3000/">Alerts</a></li>
                </ul>
                <ul className="logout">
                    <li><img src={iconUser} alt="icon user" /></li>
                    <li><form><button className="NavBar-logout" onClick={this.logOut} >Sign out</button></form></li>
                </ul>
            </div>
        );
    };
}

export default NavBar;