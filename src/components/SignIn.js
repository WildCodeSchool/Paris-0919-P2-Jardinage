import React from 'react'
// import { Link } from 'react-router-dom'

import './style/Connexion.scss'

class SignIn extends React.Component{
  state = {
    email: "",
    password: ""
  }

  handleChanges = (event) => { // [name] is the property "name" of each input, permits to use a unique function to handle changes
    const input = event.target
    const name = input.name
    this.setState({ 
      [name]: input.value 
    })
  }

  render(){
    return(
      <form>
        <div className="Connexion-section-title">
          Welcome home !
        </div>
        <input 
          name="email"
          type="email"
          value={this.state.email}
          placeholder="Mail"
          onChange={this.handleChanges}
        />
        <input 
          name="password"
          type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChanges}
        />
        <button className="SignIn-btn">
          Sign In
        </button>
      </form>
    );
  };
};

export default SignIn