import React from "react";

import iconTree from "../icon-tree.svg";
import { NavLink } from "react-router-dom";

import "../App.scss";
import "./style/notifs.scss";


class NavBar extends React.Component {
  state = {
    invisible: "",
  };


  componentDidMount() {
    this.props.counter > 0 ? this.setState({invisible:""}): this.setState({invisible:"invisible"})
  }

  componentDidUpdate(previousProps) {
    if (
      previousProps.counter !== this.props.counter
    ) {
      this.setState({ invisible: "" });
    }
  }

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
          <li>
            <NavLink to="/garden" activeClassName="active">
              <div id="idnotif" className={`${this.props.animationClass} ${this.state.invisible}`}>
                {this.props.counter}
              </div>
              Garden
            </NavLink>
          </li>
          <li>
            <NavLink to="/board" activeClassName="active">
              Board
            </NavLink>
          </li>
          <li>
            <NavLink to="/alerts" activeClassName="active">
              Alerts
            </NavLink>
          </li>
        </ul>
        <ul className="logout">
          <li className="log">
            <form>
              <button>
                <NavLink to='/' className="NavBar-logout" onClick={this.props.logOut}>
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
