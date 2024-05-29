import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await axios.post('https://flowiseai-railway-production-a00a.up.railway.app/api/v1/prediction/1d0703f8-aea0-4e82-84bf-000a3cf4c3a9', {
        question: input
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResponse(res.data.text);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;
