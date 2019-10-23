import React from "react";
import axios from 'axios';
import { geolocated } from "react-geolocated";

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationReversed: [],
      lat: null,
      long:null,
      error:"",
      url:""
    }


    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      this.setState({
        lat: Math.round(crd.latitude * 1000) / 1000,
        long: Math.round(crd.longitude * 100) / 100,
        
      })
      this.setState({url: `https://api-adresse.data.gouv.fr/reverse/?lon=${this.state.long}&lat=${this.state.lat}`})
    
      console.log(`Latitude cool : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
    },(err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },  {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  axiosCall() {
    
   
    //  setTimeout( ()=> {

     
    //  }, 1000)

    axios.get(this.state.url).then(res => {
      console.log("this.state.url test", this.state.url + "hello")
      const locationReversed = res.data;
      // console.log("locationReversed test", locationReversed)
      // this.setState({ locationReversed: [locationReversed] });
      console.log("this.state.locationReversed", this.state.locationReversed)
      console.log("my second state call of state", this.state)
      console.log("this.state.url callBack" ,this.state.url)
      this.setState({ locationReversed: [locationReversed] })
    })
 
  }



 


  // long: 2.35
  //lat 48.846

  componentDidMount() {
    console.log("my first state call", this.state)
    console.log("this.state.url",Boolean(this.state.url))
    // if(this.state.url) {

    //   console.log("this.state.long", this.state.long)
    //   axios.get(this.state.url).then(res => {
    //     const locationReversed = res.data;
    //     this.setState({ locationReversed: [locationReversed] });
    //     console.log("this.state.long", this.state.long)
    //   })
      
    // }
    setTimeout(()=>{this.axiosCall()},300)
    

  
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{this.state.lat}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{this.state.long}</td>
          </tr>
          <tr>
            <td>Ville</td>
            {console.log('test', this.state, "$", this.state)}
            <td>
              <ul>
                {console.log("My state", this.state)}
                {/* <li>{this.state.locationReversed.length ? this.state.locationReversed[0] : null}</li> */}
                <li>{this.state.locationReversed[0] ? console.log("YES",this.state.locationReversed[0].features[0].properties.city) : "null"}</li>
                <li>{this.state.locationReversed[0] ? this.state.locationReversed[0].features[0].properties.city : "null"}</li>
                <li>{console.log(this.state.locationReversed[0])}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
            <div>Getting the location data&hellip; </div>
          );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);


