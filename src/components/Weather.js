import React from 'react';
import Titles from "./weatherComp/Titles"
import Form from "./weatherComp/Form"
import WeatherDetails from "./weatherComp/WeatherDetails"
import '../App.scss';


class Weather extends React.Component {

    render() {
        return (
            <div id="weather">
                <Titles/>
                <Form/>
                <WeatherDetails/>
            </div>
        );
    }
}

export default Weather;
