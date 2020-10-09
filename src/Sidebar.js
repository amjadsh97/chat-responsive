import React from 'react';
import './Sidebar.css';
import logo from './images/logo192.png';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="header">
                <img className='header__img' src={logo} alt="logo"/>
                <span>New Request</span>
            </div>
            <div className="dotted-wizard">
                <ul className='list'>
                    <li className='list__item'></li>
                    <li className='list__item'></li>
                    <li className='list__item'></li>
                </ul>
            </div>
            <h1 className='sidebar__title'>What's the goal</h1>

            <div className="select">
                <span className='select__label'>Single goal</span>
                <select></select>
            </div>

            <div className="button-wrapper">
                <button className='button'>Reverse dinner</button>
                <button className='button'>plan a verification</button>
                <button className='button'>pay for tickets</button>
            </div>
            <a className='sidebar__link' href='#'>Show more</a>

            <div className="sidebar__bottom">
                <button className='button button-primary'>Can't proceed</button>
                <button className='button button-secondary'>Confirm goal</button>
            </div>
        </div>
    );
}

export default Sidebar;
