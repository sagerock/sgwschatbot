import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';  
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        'https://flowiseai-railway-production-a00a.up.railway.app/api/v1/prediction/1d0703f8-aea0-4e82-84bf-000a3cf4c3a9',
        { question: input },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const botMessage = {
        sender: 'bot',
        text: response.data.text,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}: </strong>{msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
