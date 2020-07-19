import React from 'react';

import './style.scss'
import Header from '../Header';
import Footer from '../Footer';
import HeroBlock from '../HeroBlock';

const Content = () => {
    return (
        <div className='Content'>
            <Header />
            <HeroBlock />
            <Footer />
        </div>
    );
};

export default Content;