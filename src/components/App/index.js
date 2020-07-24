import React, { Component } from 'react';

import './style.scss';
import Navigation from '../Navigation';
import Content from '../Content';

export default class App extends Component {

    render () {
        return (
            <div className='App'>
                <Navigation />
                <Content />
            </div>
        );
    };
};