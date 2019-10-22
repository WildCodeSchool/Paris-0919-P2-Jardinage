import React from 'react'

import './style/SignIn.scss'

class SignIn extends React.Component{
  state = {
    name: "",
    password: "",
    signin: true,
    signup: false
  }

  handleChanges = (event) => { // [name] is the property "name" of each input, permits to use a unique function to handle changes
    const input = event.target
    const name = input.name
    this.setState({ 
      [name]: input.value 
    })
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
            <form>
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
              <button onClick={this.props.toggleSignInModal} className="SignIn-btn">
                Sign In
              </button>
              <br/>
              <a onClick={this.props.toggleSignInModal} className="SignIn-link">I don't have an account</a>
            </form>
          </div>
        </div>
      </div>
    )
  };
};

export default SignIn