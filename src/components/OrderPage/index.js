import React from 'react';

import './style.scss'
import OrderPanel from '../OrderPanel';
import Location from '../Location';

const OrderPage = () => {
    return (
        <div className='OrderPage'>
            <Location />
            <OrderPanel />
        </div>
    );
};

export default OrderPage;