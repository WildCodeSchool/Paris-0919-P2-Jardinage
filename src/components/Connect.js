import React from 'react';
import '../App.scss';

function Connect() {
    return (
        <div id="connect">
            <ul>
                <li><h1>PlantMe</h1></li>
            </ul>
            <ul className="sign">
                <li><a href="http://localhost:3000/">Sign in</a></li>
                <li><a href="http://localhost:3000/">Sign up</a></li>
            </ul>
        </div>
    );
}

export default Connect;
