import React from 'react';

import './style.scss';
import Header from '../Header';
import OrderPage from '../OrderPage';
import PagesPanel from '../PagesPanel';

const Content = () => {
    return (
        <div className='Content'>
            <Header />
            <PagesPanel />
            <OrderPage />
        </div>
    );
};

export default Content;