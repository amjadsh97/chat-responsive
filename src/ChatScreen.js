import React from 'react';
import Message from "./Message";
import './Chatscreen.css';

function ChatScreen() {
    return (
        <div className='chatscreen'>
            <Message/>
            <textarea className='chatscreen__input' type='text' placeholder='Type a message'/>
        </div>
    );
}

export default ChatScreen;
