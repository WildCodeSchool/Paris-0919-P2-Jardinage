import React from 'react';
import '../App.scss';
import './style/social.scss'

function Footer() {
    return (
        <div id="footer">
            <div id="infos">
                <ul>
                    <li className="listTitle">CONTACT US</li>
                    <li><a href="http://localhost:3000/">Help</a></li>
                    <li><a href="http://localhost:3000/">Press</a></li>
                    <li><a href="http://localhost:3000/">Join us</a></li>
                    <li><a href="http://localhost:3000/">Become seeder</a></li>
                </ul>
                <ul>
                    <li className="listTitle">HOW IT WORKS</li>
                    <li><a href="http://localhost:3000/">Sponsorship</a></li>
                    <li><a href="http://localhost:3000/">Subscription</a></li>
                </ul>
                <ul>
                    <li className="listTitle">COMPANY</li>
                    <li><a href="http://localhost:3000/">Events</a></li>
                    <li><a href="http://localhost:3000/">Partnership</a></li>
                </ul>
                <ul>
                    <li className="listTitle">ABOUT</li>
                    <li><a href="http://localhost:3000/">Our commitments</a></li>
                    <li><a href="http://localhost:3000/">GoodPlanet</a></li>
                    <li><a href="http://localhost:3000/">Packaging responsable</a></li>
                </ul>
            </div>
            <div id="social">
                <ul className="social-networks square spin-icon">
                    <li><a href="https://twitter.com/reactjs" className="icon-facebook">Facebook</a></li>
                    <li><a href="https://twitter.com/reactjs" className="icon-twitter">Twitter</a></li>
                    <li><a href="https://twitter.com/reactjs" className="icon-instagram">Instagram</a></li>
                </ul>
                <ul id="copyrights">
                    <li><a href="http://localhost:3000/">Legal mentions</a></li>
                    <li>-</li>
                    <li><a href="http://localhost:3000/">Cookies</a></li>
                    <li>-</li>
                    <li><a href="http://localhost:3000/">PlantMe © 2019</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
