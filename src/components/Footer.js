import React from 'react';
import '../App.scss';
import './style/social.scss'

function Footer() {
    return (
        <div id="footer">
            <div id="infos">
                <ul>
                    <li className="listTitle">CONTACT US</li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Join us</a></li>
                    <li><a href="">Become seeder</a></li>
                </ul>
                <ul>
                    <li className="listTitle">HOW IT WORKS</li>
                    <li><a href="">Sponsorship</a></li>
                    <li><a href="">Subscription</a></li>
                </ul>
                <ul>
                    <li className="listTitle">COMPANY</li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Partnership</a></li>
                </ul>
                <ul>
                    <li className="listTitle">ABOUT</li>
                    <li><a href="">Our commitments</a></li>
                    <li><a href="">GoodPlanet</a></li>
                    <li><a href="">Packaging responsable</a></li>
                </ul>
            </div>
            <div id="social">
                <ul className="social-networks square spin-icon">
                    <li><a href="https://twitter.com/reactjs" className="icon-facebook">Facebook</a></li>
                    <li><a href="https://twitter.com/reactjs" className="icon-twitter">Twitter</a></li>
                    <li><a href="https://twitter.com/reactjs" className="icon-instagram">Instagram</a></li>
                </ul>
                <ul id="copyrights">
                    <li><a href="">Legal mentions</a></li>
                    <li>-</li>
                    <li><a href="">Cookies</a></li>
                    <li>-</li>
                    <li><a href="">PlantMe © 2019</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
