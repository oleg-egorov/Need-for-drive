import React from 'react';

import {ReactComponent as Cross} from '../../assets/icon/cross.svg';
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
                <img className='Location__Img' src={require('../../assets/image/screen.png')} alt='map'/>
            </div>
        </div>
    );
};

export default Location;