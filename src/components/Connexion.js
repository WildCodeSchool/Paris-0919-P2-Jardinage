import React from 'react'

import SignIn from "./SignIn"
import SignUp from './Signup'

import './style/Connexion.scss'

class Connexion extends React.Component{
  state = {
    signin: true,
    signup: false
  }

  toggleConnexionType = (event) => {
    event.preventDefault()
    this.setState({
      signin: !this.state.signin,
      signup: !this.state.signup
    })
  }

  render() {
    return(
      <div className="SignIn-wrap">
        <div className="SignIn-container">
          <div className="SignIn-header">
            <div onClick={this.toggleConnexionType} className={this.state.signin ? `SignIn-title signin active` : `SignIn-title signin `}>Sign in</div>
            <div onClick={this.toggleConnexionType} className={this.state.signup ? `SignIn-title signup active` : `SignIn-title signup `}>Sign up</div>
          </div>
          <div className="SignIn-body">
            {this.state.signin ? <SignIn /> : <SignUp />}
          </div>
          {/* {this.state.signin ? 
          <a className="SignIn-link" onClick={this.toggleConnexionType}>I don't have an account</a>
          :
          <a className="SignIn-link" onClick={this.toggleConnexionType}>I already have an account</a>
          } */}
        </div>
      </div>
    )
  };
};

export default Connexion