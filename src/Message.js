import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}

export default Message
