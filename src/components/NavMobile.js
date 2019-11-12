import React from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faLeaf } from '@fortawesome/free-solid-svg-icons'


import './style/notifs.scss'

class NavMobile extends React.Component {
  render() {
    return (
      <div className="nav-mobile">
        <ul className="menu">
          <li><NavLink to="/garden" id="gardenLink" activeClassName="active" className="NavbarMobile__item">
            {this.props.counter ?
              <div id="idnotif" className="">{this.props.counter}</div>
            : 
              null
            }
              <FontAwesomeIcon icon={faLeaf} />
            </NavLink>
          </li>
          <li><NavLink to="/board" id="homeLink" activeClassName="active" className="NavbarMobile__item"><FontAwesomeIcon icon={faHome} /></NavLink></li>
          <li ><NavLink to="/alerts" id="alertsLink" activeClassName="active" className="NavbarMobile__item"><FontAwesomeIcon icon={faBell} /></NavLink></li>
        </ul>
      </div>
    );
  }
}

export default NavMobile;