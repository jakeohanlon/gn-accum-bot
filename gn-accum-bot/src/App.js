import React, { useState } from 'react';
import './App.css';

function getResponse() {
  const strings = [
    "haha, wyd?",
    "haha, free tn?",
    "lol, what you wearing?",
    "ok cool, u free rn baby?",
    "oh ahah, u wanna meet later?"
  ];

  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const response = getResponse();
  console.log("Random string:", response);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const userMessage = { text: inputValue, sender: 'user' };
      const botMessage = { text: response, sender: 'bot' };
      const newMessages = [...messages, userMessage, botMessage];
      setMessages(newMessages);
      setInputValue('');
      console.log(newMessages); // Check the messages array
    }
  };

  return (
    <div className="App">
      <h1>gnaccumbot</h1>
      <div className="messages-container">
        {messages.map((message, index) => {
          console.log(message.text); // Check the text property
          return (
            <div
              key={index}
              className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
            >
              {message.text}
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;