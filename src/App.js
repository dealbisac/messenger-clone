import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi', 'hey']);
  const [username, setUsername] = useState('');

  //useState = variable in REACT.
  //useEffect = run code on a condition in REACT.

  useEffect(() => {
    //run code here..
    //if dependecy is blank, this code runs ONCE when the app component loads
    //if input is present, this code runs when the input changes
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessages = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome to Messenger Clone</h1>
      <h2> Hi, {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message text={message} />
        ))
      }

    </div>
  );
}

export default App;
