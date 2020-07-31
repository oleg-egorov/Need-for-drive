import React, { Component } from 'react';

import './style.scss';
import ModelPanel from '../ModelPanel';
import CarList from '../CarList';

export default class Model extends Component {
    carsList = [
        {
            mark: 'ELANTRA',
            price: '12 000-25 000 ₽',
            image: './image/1.png'
        },
        {
            mark: 'i30 N',
            price: '10 000 - 32 000 ₽',
            image: './image/2.png'
        },
        {
            mark: 'CRETA',
            price: '12 000 - 25 000 ₽',
            image: './image/3.png'
        }
        ,{
            mark: 'SONATA',
            price: '10 000 - 32 000 ₽',
            image: './image/4.png'
        },
        {
            mark: 'ELANTRA',
            price: '12 000-25 000 ₽',
            image: './image/1.png'
        },
        {
            mark: 'i30 N',
            price: '10 000 - 32 000 ₽',
            image: './image/2.png'
        }
    ]

    render () {
        return (
            <div className='Model'>
                <ModelPanel />
                <CarList list={this.carsList}/>
            </div>
        );
    };
};