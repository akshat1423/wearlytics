// src/ChatApp.js
import React, { useState } from 'react';
import './ChatApp.css'; // Import CSS for styling

const ChatApp = () => {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([]);
    const userId = 'AkshatJain'; // Replace with dynamic user ID if needed

    const handleSend = async () => {
        if (!query) return;

        // Add user message to the chat
        setMessages([...messages, { user: true, text: query }]);
        setQuery('');

        try {
            const response = await fetch('https://wearlytics.pythonanywhere.com/api/chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId,
                    query: query,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const assistantResponse = data.response;

            // Add assistant message to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { user: false, text: assistantResponse },
            ]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-container">
            <h2 className="doctor-recommendation">AI Health Assistant</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.user ? 'user-message' : 'assistant-message'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question..."
                />
                <button className="chat-btn" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatApp;
