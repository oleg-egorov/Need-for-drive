import React from 'react';

import './style.scss';

const SliderPanel = ({items, index}) => {
    const elements = items.map((item , id) => {
        const active = index === id ? 'Active' : null;
        
        return (
            <div className={`NotActive ${active}`} key={id}/>
        );
    });

    return elements;
};

export default SliderPanel;