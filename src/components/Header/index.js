import React from 'react';

import {ReactComponent as Point} from '../../assets/icon//point.svg';
import './style.scss';

const Header = () => {
    return (
        <div className='Header'>
                <span className='Header__Logo MainAccent'>Need for drive</span>
            <div className='Header__Map'>
                <Point className='Header__Icon'/>
                <span className='Header__City'>Ульяновск</span>
            </div>
        </div>
    );
};

export default Header;