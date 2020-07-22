import React from 'react';

import './style.scss';

const label = [
    {text: 'Полный бак, 500р'},
    {text: 'Детское кресло, 200р'},
    {text: 'Правый руль, 1600р'}
]

const AddPanel = () => {
    const elements = label.map((item, id) => {
        return (
            <label className='AddPanel__Label' key={id}>
                <input className='AddPanel__Check' type='checkbox'/>
                <span className='AddPanel__Fake' />
                <span className='AddPanel__Text'>{item.text}</span>
            </label>
        );
    });

    return (
        <div className='AddPanel'>
            {elements}
        </div>
    );
};

export default AddPanel;