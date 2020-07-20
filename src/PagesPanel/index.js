import React from 'react';

import './style.scss';

const PagesPanel = () => {
    return (
        <div className='PagesPanel'>
            <span>Местоположение</span>
            <img src={require('./image/arrow.svg')} alt='arrow'/>
            <span>Модель</span>
            <img src={require('./image/arrow.svg')} alt='arrow'/>
            <span>Дополнительно</span>
            <img src={require('./image/arrow.svg')} alt='arrow'/>
            <span>Итого</span>
        </div>
    );
};

export default PagesPanel;