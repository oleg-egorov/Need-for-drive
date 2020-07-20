import React from 'react';

import './style.scss'

const Header = () => {
    return (
        <div className='Header'>
                <span className='Header__Logo MainAccent'>Need for drive</span>
            <div className='Header__Map'>
                <img src={require('./image/point.svg')} alt='point'/>
                <span className='Header__City'>Ульяновск</span>
            </div>
        </div>
    );
};

export default Header;