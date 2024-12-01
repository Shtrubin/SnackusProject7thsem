import React, { useState, useRef, useEffect } from 'react';
import '../styles/chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatHistoryRef = useRef(null);  

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

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]); 

  return (
    <div className="chatbot">
      <div className="chatbot-heading">
        <h2>Welcome to Snackbot!</h2>
        <p>Your virtual food buddy, ready to help you with tasty suggestions.</p>
      </div>

      <div className="chat-history" ref={chatHistoryRef}>  
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
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
