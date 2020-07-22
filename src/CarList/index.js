import React, { Component } from 'react';

import './style.scss';

export default class CarList extends Component {

    render () {
        const { list } = this.props;
        
        const elements = list.map((item, id) => {
            return (
                <div className='CarList__Car' key={id}>
                    <div className='CarList__Description'>
                        <span className='CarList__Mark'>{item.mark}</span>
                        <span className='CarList__Price'>{item.price}</span>
                    </div>
                    <img className='CarList__Image' alt='car' src={require(`${item.image}`)} />
                </div>
            );
        });

        return (
            <div className='CarList'>
                {elements}
            </div>
        );
    };
};