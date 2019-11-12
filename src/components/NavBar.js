import React from 'react';

import iconTree from '../icon-tree.svg';
import iconUser from '../icon-user.svg';
import { NavLink } from 'react-router-dom';

import '../App.scss';
import './style/notifs.scss'

class NavBar extends React.Component {
  logOut = event => {
    localStorage.removeItem('email');
  };

  render() {
    return (
      <div id="navBar">
        <NavLink to="/" className="header--title">
          <ul>
            <li>
              <img src={iconTree} alt="icon tree" />
            </li>
            <li>
              <h1>PlantMe</h1>
            </li>
          </ul>
        </NavLink>
        <ul className="menu">
          <li><NavLink to="/garden" activeClassName="active">
            {(this.props.counter > 0)
              ? <div id="idnotif" className="">{this.props.counter}</div>
              : null}
            Garden</NavLink></li>
          <li><NavLink to="/board" activeClassName="active">Board</NavLink></li>
          <li><NavLink to="/alerts" activeClassName="active">Alerts</NavLink></li>
        </ul>
        <ul className="logout">
          <li className="alert-icon">
            <img src={iconUser} alt="icon user" />
          </li>
          <li className="log">
            <form>
              <button>
                <NavLink to='/' className="NavBar-logout" onClick={this.logOut}>
                  Sign out
                </NavLink>
              </button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
