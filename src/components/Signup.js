import React from 'react'

import './style/Connexion.scss'

class SignUp extends React.Component{
  state ={
    name: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    country: "",
    favPlant: "",
    secondForm: false
  }

  handleChanges = (event) => { // [name] is the property "name" of each input, permits to use a unique function to handle changes
    const input = event.target
    const name = input.name
    this.setState({ 
      [name]: input.value 
    })
  }

  showFirstForm = (event) => {
    event.preventDefault()
    this.setState({
      secondForm: false
    })
  }

  showSecondForm = (event) => {
    event.preventDefault()
    this.setState({
      secondForm: true
    })
  }
  

  render(){
    return(
      <form>
        {!this.state.secondForm ? 
          <div>
            <div className="Connexion-section-title">
              Principal informations
            </div>
            <input 
              name="name"
              type="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChanges}
            />
            <input 
              name="lastName"
              type="text"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.handleChanges}
            />
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
            <button onClick={this.showSecondForm} className="SignIn-btn">
              Next
            </button>
          </div>
        :
          <div className="SignUp-second-form">
            <div className="Connexion-section-title">
              Complementary informations
            </div>
            <input 
              name="city"
              type="text"
              value={this.state.city}
              placeholder="City"
              onChange={this.handleChanges}
            />
            <input 
              name="country"
              type="text"
              value={this.state.country}
              placeholder="Country"
              onChange={this.handleChanges}
            />
            <input 
              name="favPlant"
              type="text"
              value={this.state.favPlant}
              placeholder="Favorite Plant"
              onChange={this.handleChanges}
            />
            <button onClick={this.showFirstForm} className="SignIn-btn--transparent">
              Precedent
            </button>
            <button className="SignIn-btn">
              Submit
            </button>
          </div>
        }
      </form>
    );
  };
};

export default SignUp