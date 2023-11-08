import React, { Component } from 'react';
import logo from "../icon_assests/footer-logo.png"

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer-image'>
                    <img src={logo} alt='logo'></img>
                </div>
                <ul className='footer-list'>
                    <li>
                        <h3>Navigation</h3>
                    </li>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Menu</a>
                    </li>
                    <li>
                        <a href='/reservations'>Reservations</a>
                    </li>
                    <li>
                        <a href='/'>Order Online</a>
                    </li>
                    <li>
                        <a href='/'>Login</a>
                    </li>
                </ul>
                <ul className='footer-list'>
                    <li>
                        <h3>Contact</h3>
                    </li>
                    <li>
                        <a href='/'>Address</a>
                    </li>
                    <li>
                        <a href='/'>Phone Number</a>
                    </li>
                    <li>
                        <a href='/'>Email</a>
                    </li>
                </ul>
                <ul className='footer-list'>
                    <li>
                        <h3>Social Media</h3>
                    </li>
                    <li>
                        <a href='https://facebook.com'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://instagram.com'>Instagram</a>
                    </li>
                    <li>
                        <a href='https://linkedin.com'>Linkedin</a>
                    </li>
                </ul>
            </footer>
        )
    }
}