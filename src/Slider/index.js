import React, { Component } from 'react';

import './style.scss'
import SliderPanel from '../SliderPanel';
import {Image_1, Image_2, Image_3, Image_4} from './image.js';

const slider = [
    {
        title:'Бесплатная парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах',
        image: Image_1,
        button: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
    },
    {
        title:'Страховка',
        description: 'Полная страховка автомобиля',
        image: Image_2,
        button: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)'
    },
    {
        title:'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт',
        image: Image_3,
        button: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
    },
    {
        title:'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО',
        image: Image_4,
        button: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)'
    }
]

export default class Slider extends Component {
    state = {
        index: 0
    }

    clickControleLeft = () => {
        this.setState((state) => {
            if (state.index !== -1) {
                return ({
                    index: state.index--
                });
            } else {
                return ({
                    index: 3
                });
            };
        });
    }
    

    clickControleRight = () => {
        this.setState((state) => {
            if (state.index !== 4) {
                return ({
                    index: state.index++
                });
            } else {
                return ({
                    index: 0
                });
            }
        });
    }

    render () {
        const { index } = this.state;

        return (
            <div className='Slider' style={{backgroundImage: `url(${slider[index].image})`}}>
                <div className='Slider__Content'>
                    <span className='Slider__Title'> {slider[index].title} </span>
                    <span className='Slider__Description'> {slider[index].description} </span>
                    <button type='button' className='Slider__Button ColorButton' 
                            style={{background: `${slider[index].button}`}}>Подробнее</button>
                </div>
                <div className='Slider__Panel'>
                    {slider ? <SliderPanel items={slider} index={index}/> : null}
                </div>
                
                <div className='Controls__Panel'>
                    <div className='Control Control_Left' onClick={this.clickControleLeft}>
                        <img src={require('./image/left.svg')} alt='left'/>
                    </div>
                    <div className='Control Control_Right' onClick={this.clickControleRight}>
                        <img src={require('./image/right.svg')} alt='right'/>
                    </div>
                </div>
            </div>
        );
    };
};