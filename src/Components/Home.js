import React, { Component } from 'react';
import Intro from './Intro';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Bio from './Bio';

export default class Home extends Component {
    render() {
        return (
            <main>
                <Intro></Intro>
                <Specials></Specials>
                <Testimonials></Testimonials>
                <Bio></Bio>
            </main>
        )
    }
}