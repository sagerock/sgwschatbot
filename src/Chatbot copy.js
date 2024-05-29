import React, { useState } from 'react';
import axios from 'axios';
import ChatbotMessage from './ChatbotMessage';
import Actions from './Actions';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('https://flowiseai-railway-production-a00a.up.railway.app/api/v1/prediction/1d0703f8-aea0-4e82-84bf-000a3cf4c3a9', {
        message: input,
      });
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'There was an error connecting to the chatbot.', sender: 'bot' };
      setMessages([...messages, userMessage, errorMessage]);
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <ChatbotMessage key={index} message={msg} />
        ))}
      </div>
      <Actions />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
