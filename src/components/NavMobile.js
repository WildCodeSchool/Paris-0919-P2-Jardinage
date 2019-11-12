import React from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faLeaf } from '@fortawesome/free-solid-svg-icons'


import './style/notifs.scss'

class NavMobile extends React.Component {
  state = {
    invisible: ""
  };

  componentDidMount() {
    this.props.counter > 0 ? this.setState({invisible:""}): this.setState({invisible:"invisible"})
  }
  componentDidUpdate(previousProps) {
    if (
      previousProps.counter !== this.props.counter &&
      this.props.counter === 1
    ) {
      this.setState({ invisible: "" });
    }
  }
  render() {
    return (
      <div className="nav-mobile">
        <ul className="menu">
          <li><NavLink to="/garden" id="gardenLink" activeClassName="active" className="NavbarMobile__item">
            <div id="idnotifMobile"className={`${this.props.animationClass} ${this.state.invisible}`}>{this.props.counter}</div>
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