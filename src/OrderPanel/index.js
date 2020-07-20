import React, { Component } from 'react';

import './style.scss';

export default class OrderPanel extends Component {
    state = {
        point: 'Саранск',
        model: 'Лада',
        color: 'Черный',
        duration: '',
        rate: '',
        tank: ''
    };

    render () {
        const { point,
                model,
                color } = this.state;

        return(
            <div className='OrderPanel'>
                <span className='OrderPanel__Header'>Ваш заказ:</span>
                <span>{point ? 'Пункт выдачи - ' + point : null }</span>
                <span>{model ? 'Модель - ' + model : null }</span>
                <span>{color ? 'Цвет - ' + color : null }</span>
                <span className='OrderPanel__Price'>Цена:</span>
                <button type='button' className='OrderPanel__Button'>Выбрать модель</button>
            </div>
        );
    };
};