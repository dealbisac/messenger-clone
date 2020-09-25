import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi', 'hey']);
  console.log(input);
  console.log(messages);

  const sendMessages = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome to Messenger Clone</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={sendMessages}>Send Message</button>
      </form>

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
