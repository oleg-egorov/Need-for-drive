import React, { Component } from 'react';

import './style.scss';
import Slider from '../Slider'

export default class App extends Component {

    render () {
        return (
            <div className='App'>
                <Slider />
            </div>
        );
    };
};