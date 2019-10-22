import React from 'react'

import './style/SignIn.css'

class SignIn extends React.Component{
  state = {
    name: "",
    password: ""
  }

  handleChanges = (event) => {
    const input = event.target
    const name = input.name
    this.setState({ 
      [name]: input.value 
    })
  }

  render() {
    return(
      <div className="SignIn-wrap">
        <div className="SignIn-container">
          <div className="SignIn-header">
            SIGN IN
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
            </form>
          </div>
          <div className="SignIn-footer">
            <button className="SignIn-btn">Sign In</button>
            <a href="javascript:void(0)" className="SignIn-link">I don't have an account</a>
          </div>
        </div>
      </div>
    )
  };
};

export default SignIn