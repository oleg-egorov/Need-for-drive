import React from 'react';

import './style.scss';

const PagesPanel = () => {
    return (
        <div className='PagesPanel'>
            <span className='PagesPanel__Text passed'>Местоположение</span>
            <img src={require('./image/arrow.svg')} alt='arrow'/>
            <span className='PagesPanel__Text active'>Модель</span>
            <img src={require('./image/arrow.svg')} alt='arrow'/>
            <span className='PagesPanel__Text'>Дополнительно</span>
            <img src={require('./image/arrow.svg')} alt='arrow'/>
            <span className='PagesPanel__Text'>Итого</span>
        </div>
    );
};

export default PagesPanel;