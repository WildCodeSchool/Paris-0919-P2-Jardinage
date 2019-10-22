import React from 'react';

const API_KEY = "7db2e8659b5a9fb66a3f54bcc4e4a67f";

class Form extends React.Component {
    getWeather = async () => {
        const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
        const res = await api_call.json();
        console.log(res);
    }
    render() {
        return (
            <div id="form">
                <form onSubmit={this.props.getWeater}>
                    <input type="text" name="city" placeholder="City..." />
                    <input type="text" name="country" placeholder="Country..." />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}
export default Form;
