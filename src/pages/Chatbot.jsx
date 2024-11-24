import React, { useState } from 'react';
import '../styles/chatbot.css'

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: 'user', text: message }]);
      setMessage('');

      try {
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: message }),
        });

        const data = await response.json();
        setChatHistory([
          ...chatHistory,
          { sender: 'user', text: message },
          { sender: 'bot', text: data.response },
        ]);
      } catch (error) {
        console.error('Error:', error);
        setChatHistory([
          ...chatHistory,
          { sender: 'bot', text: 'Sorry, there was an error.' },
        ]);
      }
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={chat.sender === 'user' ? 'user-message' : 'bot-message'}
          >
            {chat.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
