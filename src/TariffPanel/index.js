import React from 'react';

import './style.scss';

const label = [
    {text: 'Поминутно, 7₽/мин'},
    {text: 'На сутки, 1999 ₽/сутки'}
]

const TariffPanel = () => {
    const elements = label.map((item, id) => {
        return (
            <label className='TariffPanel__Label' key={id}>
                <input className='TariffPanel__Radio' type='radio' name='имя1'/>
                <span className='TariffPanel__Text'>{item.text}</span>
            </label>
        );
    });

    return (
        <div className='TariffPanel'>
            {elements}
        </div>
    );
};

export default TariffPanel;