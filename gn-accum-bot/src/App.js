import React, { useState } from 'react';
import './App.css';

function getResponse() {
  const strings = [
    "haha, wyd?",
    "haha, free tn?",
    "lol, what you wearing?",
    "ok cool, u free rn baby?",
    "oh ahah, u wanna meet later?",
    "im going to shower, wanna join?",
    "ok... send pics?",
    "late night, all i can think about is you",
    "you in bed? can i join?",
    "i’m so hard right now",
    "so horny, help me fix?",
    "u wanna see something haha?",
    "if you come over I will make it worth your time",
    "there are so many things I want to do to you",

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