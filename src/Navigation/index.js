import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu/dist/HamburgerMenu';
import {ReactComponent as FacebookIcon} from './image/Facebook.svg';
import {ReactComponent as TelegramIcon} from './image/Telegram.svg';
import {ReactComponent as InstagramIcon} from './image/Instagram.svg';

import './style.scss';

export default class Navigation extends Component {

    state = {
        open: false
    }

    openNavigation = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        });
    };

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render () {
        const { open } = this.state;

        let classNavigation = 'Navigation';  
        let classMenuText = 'Navigation__Text';
        let classMenu = 'Navigation__Menu';
    
        if (open) {
            classNavigation += ' open';
            classMenuText += ' open';
            classMenu += ' open';
        };

        return (
            <div className={classNavigation}>
                <div className='Navigation__Items'>
                    <div className='Navigation__Hamburger'>
                        <HamburgerMenu
                            className='Navigation__HamburgerMenu'
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={30}
                            height={16}
                            strokeWidth={4}
                            rotate={0}
                            color='white'
                            borderRadius={5}
                            animationDuration={0.5}
                        />
                    </div>

                    <div className='Navigation__Circle'>
                        <div className='Navigation__Lang'>
                            <span>Eng</span>
                        </div>
                    </div>
                </div>

                <div className={classMenu}>
                    <span className={classMenuText}>ПАРКОВКА</span>
                    <span className={classMenuText}>СТРАХОВКА</span>
                    <span className={classMenuText}>БЕНЗИН</span>
                    <span className={classMenuText}>ОБСЛУЖИВАНИЕ</span>

                    <div className='Navigation__Icons'>
                        <TelegramIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        );
    };
};