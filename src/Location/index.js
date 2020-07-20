import React from 'react';

import {ReactComponent as Cross} from './cross.svg';
import './style.scss';

const Location = () => {
    return (
        <div className='Location'>
            <div className='Location__Items'>
                <div className='Location__Text'>
                    <span>Город</span>
                    <span>Пункт выдачи</span>
                </div>

                <div className='Location__Choose'>
                    <div className='Location__Input' >
                        <input placeholder='Начните вводить город'/>
                        <Cross />
                    </div>
                    <div className='Location__Input' >
                        <input placeholder='Начните вводить пункт'/>
                        <Cross />
                    </div>
                </div>
            </div>

            <div className='Location__Map'>
                <span>Выбор на карте:</span>
                <img className='Location__Img' src={require('./screen.png')} />
            </div>
        </div>
    );
};

export default Location;