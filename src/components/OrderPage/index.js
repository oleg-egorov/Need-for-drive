import React from 'react';

import './style.scss'
import OrderPanel from '../OrderPanel';
import Total from '../Total';

const OrderPage = () => {
    return (
        <div className='OrderPage'>
            <Total />
            <OrderPanel />
        </div>
    );
};

export default OrderPage;