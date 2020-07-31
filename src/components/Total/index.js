import React from 'react';

import './style.scss';

const Total = () => {
    return (
        <div className='Total'>
            <div className='Total__Order'>
                <span>Подтвердить заказ</span>
                <div>
                    <button type='button' className='Total__Button Total__Button_Yes'>Подтвердить</button>
                    <button type='button' className='Total__Button Total__Button_No'>Вернуться</button>
                </div>
            </div>
            <div className='Total__Description'>
                <span>Hyndai, i30 N</span>
                <div className='Total__Number'>
                    <span>
                        К 761 НА 73
                    </span>
                </div>
                <div className='Total__Items'>
                    <span>Топливо</span>
                    <span>100%</span>
                </div>
                <div className='Total__Items'>
                    <span>Доступна с</span>
                    <span>12.06.2019 12:00</span>
                </div>
            </div>
            <img src={require('./car.png')} alt='car'/>
        </div>
    );
};

export default Total;