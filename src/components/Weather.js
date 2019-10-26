import axios from 'axios'
import FormWeather from './FormWeather'
import Modal from 'react-modal'
import React from 'react';
import '../App.scss';
import './style/Weather.scss'

const modal = {
    content: {
        padding: '0',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        height: "calc(100vw/3)"

    }
};

class Weather extends React.Component {

    state = {
        modalIsOpen: false,
        location: undefined,
        city: undefined,
        country: undefined
    }

    componentDidMount() {
        this.openModal()
    }

    ///////////////// open and close modal ////////////////
    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }
    ///////////////// geolocation /////////////////////////
    agreeGeolocation = () => {
        this.closeModal()
        this.geolocationCall()
    }

    disagreeGeolocation = () => {
        this.closeModal()
    }

    geolocationCall = () => {
        axios.get(`https://api.userinfo.io/userinfos`)
            // .then(res => console.log(res))
            .then(res => res.data)
            .then(DATA => {
                this.setState({ location: DATA })
            })
            .then(() => { console.log(this.state.location) })
            .then(() => {
                this.setState({
                    city: this.state.location.city.name,
                    country: this.state.location.country.name
                })
            }
            )
    }
    ////////////////////////////////////////////////////////

    render() {
        return (

            <div>

                <Modal
                    style={modal}
                    isOpen={this.state.modalIsOpen}
                >
                    <div className="modal_grid-wrapper">
                        <p className="modal_p">Can we use geolocation to provide you a better experience?</p>
                        <button className="modal_button" onClick={this.agreeGeolocation}>I agree</button>
                        <button className="modal_button" onClick={this.disagreeGeolocation}>I disagree</button>
                    </div>
                </Modal>


                <FormWeather city={this.state.location ? this.state.location.city.name : "NO GEO NO CITY"} country={this.state.location ? this.state.location.country.name : "NO GEO NO COUNTRY"} />


            </div>
        );
    }
}
export default Weather;
