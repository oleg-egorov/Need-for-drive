import React from 'react';

import './style.scss';
import {ReactComponent as Cross} from '../../assets/icon/cross.svg';
import ColorPanel from '../ColorPanel';
import TariffPanel from '../TariffPanel';
import AddPanel from '../AddPanel';

const Details = () => {
    return (
        <div className='Details'>
            <div className='Details__Color'>
                <span className='Details__ColorText'>Цвет</span>
                <ColorPanel />
            </div>

            <div className='Details__Date'>
                <span className='Details__DateText_Header'>Дата аренды</span>

                <div className='Details__Items'>
                    <div className='Details__DateText'>
                        <span>С</span>
                        <span>По</span>
                    </div>

                    <div className='Details__Choose'>
                        <div className='Details__Input' >
                            <input placeholder='Введите дату и время'/>
                            <Cross />
                        </div>
                        <div className='Details__Input' >
                            <input placeholder='Введите дату и время'/>
                            <Cross />
                        </div>
                    </div>
                </div>
            </div>

            <div className='Details__Tariff'>
                <span className='Details__Tariff_Text'>Тариф</span>
                <TariffPanel />
            </div>

            <div className='Details__AddServices'>
                <span className='Details__AddServices_Text'>Доп услуги</span>
                <AddPanel />           
            </div>
        </div>
    );
};

export default Details;