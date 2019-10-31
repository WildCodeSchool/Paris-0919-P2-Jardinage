import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTint, faSeedling, faLeaf  } from '@fortawesome/free-solid-svg-icons'

import './style/Notifications.scss'

class Notification extends React.Component{
  state = {
    checked: this.props.notif.checked
  }

  handleCheckNotif = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return(
      <div className="Notification-container" onClick={this.handleCheckNotif}>
        <div className="Notification-badge">
          {this.props.notif.type === "watering" ? <FontAwesomeIcon icon={faTint} /> : ""}
          {this.props.notif.type === "weeding" ? <FontAwesomeIcon icon={faSeedling} /> : ""}
          {this.props.notif.type === "checking" ? <FontAwesomeIcon icon={faLeaf} /> : ""}
        </div>
        <div className="Notification-body">
          {this.props.notif.type === "watering" ? `You need to water plant ${this.props.notif.plant_id}.` : ""}
          {this.props.notif.type === "weeding" ? `You need to weed around plant ${this.props.notif.plant_id}.` : ""}
          {this.props.notif.type === "checking" ? `Make sure to check on plant ${this.props.notif.plant_id}, she's fragile.` : ""}
          <div className="Notification-validation">
            {this.state.checked ? <FontAwesomeIcon icon={faCheckCircle} /> : "To-do"}
          </div>
        </div>
      </div>
    );
  };
};

export default Notification