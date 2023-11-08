import React, { Component } from 'react';
import logo from "../icon_assests/Logo.svg";

export default class Nav extends Component {
    render() {
        return (
            <nav className='navbar'>
                <img src={logo} alt='logo'></img>
                <ul className='navLinks'>
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
            </nav>
        )
    }
}