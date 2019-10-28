import React from 'react'

import Notification from './Notification'

import './style/Notifications.scss'

const sampleNotifs = [
  {
    date: '28/10/2019',
    notifs:[
      {
        type: "checking",
        plant_id: 2,
        checked: false,
      },
      {
        type: "weeding",
        plant_id: 1,
        checked: false,
      },
      {
        type: "watering",
        plant_id: 5,
        checked: false,
      }
    ]
  },
  {
    date:"24/10/2019",
    notifs:[
      {
        type: "checking",
        plant_id: 2,
        checked: false,
      },
      {
        type: "weeding",
        plant_id: 1,
        checked: false,
      }
    ]
  }
]

class Notifications extends React.Component {
  render(){
    return(

      <div className="Notifications-container">
        <h1>Notifications</h1>
        {sampleNotifs.map(elm =>
          {
            return(
              <div className="Notification">
                <div className="Notification-date">
                  {elm.date}
                </div>
                {elm.notifs.map(notif =>
                  {
                    return <Notification notif={notif} />
                  })
                }
              </div>
            )
          })
        }
      </div>

    );
  };
};

export default Notifications