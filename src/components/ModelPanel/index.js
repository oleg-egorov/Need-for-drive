import React from 'react';

import './style.scss';

const label = [
    {text: 'Все модели'},
    {text: 'Эконом'},
    {text: 'Премиум'}
]

const ModelPanel = () => {
    const elements = label.map((item, id) => {
        return (
            <label className='ModelPanel__Label' key={id}>
                <input className='ModelPanel__Radio' type='radio' name='имя'/>
                <span className='ModelPanel__Text'>{item.text}</span>
            </label>
        );
    });

    return (
        <div className='ModelPanel'>
            {elements}
        </div>
    );
};

export default ModelPanel;