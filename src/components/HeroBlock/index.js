import React from 'react';

import './style.scss'

const HeroBlock = () => {
    return (
        <div className='HeroBlock'>
            <span className='HeroBlock__Text_1'>Каршеринг</span>
            <span className='HeroBlock__Text_2 MainAccent'>Need for drive</span>
            <span className='HeroBlock__Text_3'>Поминутная аренда авто твоего города</span>

            <button className='HeroBlock__Button'>Забронировать</button>
        </div>
    );
};

export default HeroBlock;