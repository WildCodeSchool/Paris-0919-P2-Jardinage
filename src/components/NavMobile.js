import React from 'react';
import { Link } from "react-router-dom";

class NavMobile extends React.Component {
  render() {
    return (
      <div className="nav-mobile">
        <ul className="menu">
          <li><Link to="/garden">Garden</Link></li>
          <li><Link to="/board">Board</Link></li>
          <li><Link to="/alerts">Alerts</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavMobile;