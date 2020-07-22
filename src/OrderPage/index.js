import React from 'react';

import './style.scss'
import OrderPanel from '../OrderPanel';
import Details from '../Details';

const OrderPage = () => {
    return (
        <div className='OrderPage'>
            <Details />
            <OrderPanel />
        </div>
    );
};

export default OrderPage;