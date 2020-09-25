import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div>
            <p>{props.username}: {props.text}</p>
        </div>
    )
}

export default Message
