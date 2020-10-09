import React from 'react';
import avatar from "./images/avatar.jpg";
import './Message.css';

function Message() {
    return (
        <div className='message'>
            <img src={avatar} alt="message image" className='message__avatar'/>
            <div className="message__wrapper">
                <p className='message__content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea et facilis impedit laudantium odio repudiandae ullam vero voluptatibus. Commodi eligendi laboriosam magnam, nesciunt nulla obcaecati quasi reprehenderit unde vitae voluptate.</p>
                <small className='message__info'>amjad shadid, 11:24pm (mobile app)</small>
            </div>
        </div>
    );
}

export default Message;
