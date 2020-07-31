import React from 'react';

import './style.scss';

const label = [
    {text: 'Любой'},
    {text: 'Красный'},
    {text: 'Голубой'}
]

const ColorPanel = () => {
    const elements = label.map((item, id) => {
        return (
            <label className='ColorPanel__Label' key={id}>
                <input className='ColorPanel__Radio' type='radio' name='имя'/>
                <span className='ColorPanel__Text'>{item.text}</span>
            </label>
        );
    });

    return (
        <div className='ColorPanel'>
            {elements}
        </div>
    );
};

export default ColorPanel;