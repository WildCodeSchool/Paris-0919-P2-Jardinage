import React from 'react';

import Modal from 'react-modal';

import Connexion from './Connexion'
import '../App.scss';



class Connect extends React.Component {
  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  render(){
    const customStyles = {
      content : {
        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform  : 'translate(-50%, -50%)',
        background : 'none',
        border : 'none',
      }
    };
    
    return (
      <div id="connect">
        <ul>
          <li><h1>PlantMe</h1></li>
        </ul>
        <ul className="sign">
          <li><button className="Connect-signin" href="" onClick={this.openModal}>Sign in</button></li>
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <Connexion passedMethod= {this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default Connect;
