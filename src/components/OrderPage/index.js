import React from 'react';

import './style.scss'
import OrderPanel from '../OrderPanel';
import Model from '../Model';

const OrderPage = () => {
    return (
        <div className='OrderPage'>
            <Model />
            <OrderPanel />
        </div>
    );
};

export default OrderPage;