import React, { Component } from 'react';
import dish from "../icon_assests/restauranfood.jpg";

export default class Intro extends Component {
    render() {
        return (
            <div className='intro-green'>
                <div className='intro-text'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.</p>
                        <a href="/reservations">
                            <button id="button" to="/reservations">
                            Reserve a Table
                            </button>
                        </a>
                </div>
                <div className='intro-img'>
                    <img src={dish} alt='food'></img>
                </div>
            </div>
        )
    }
}