import React, { Component } from 'react';

import './style.scss'
import SliderPanel from '../SliderPanel';

const slider = [
    {
        title:'Бесплатная парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах'
    },
    {
        title:'Страховка',
        description: 'Полная страховка автомобиля'
    },
    {
        title:'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт'
    },
    {
        title:'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО'
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
            <div className={`Slider Slider__Background_${index+1}`}>
                <div className='Slider__Content'>
                    <span className='Slider__Title'> {slider[index].title} </span>
                    <span className='Slider__Description'> {slider[index].description} </span>
                    <button type='button' className='Slider__Button ColorButton'>Подробнее</button>
                </div>
                <div className='Slider__Panel'>
                    {slider ? <SliderPanel items={slider} index={index}/> : null}
                </div>
                
                <div className='Controls__Panel'>
                    <div className='Control Control_Left' onClick={this.clickControleLeft}>
                        <img src={require('./image/left.svg')} />
                    </div>
                    <div className='Control Control_Right' onClick={this.clickControleRight}>
                        <img src={require('./image/right.svg')} />
                    </div>
                </div>
            </div>
        );
    };
};