import React from 'react';
import '../App.scss';

function NavBar() {
    return (
        <div id="navBar">
            <ul>
                <li><a href="http://localhost:3000/">Garden</a></li>
                <li><a href="http://localhost:3000/">Board</a></li>
                <li><a href="http://localhost:3000/">Alerts</a></li>
            </ul>
        </div>
    );
}

export default NavBar;
