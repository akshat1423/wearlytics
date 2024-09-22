// src/ChatApp.js
import React, { useState } from 'react';
import axios from 'axios';
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
            const response = await axios.post('https://wearlytics.pythonanywhere.com/api/chat/', {
                user_id: userId,
                query: query,
            });

            const assistantResponse = response.data.response;

            // Add assistant message to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { user: false, text: assistantResponse },
            ]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.user ? 'user-message' : 'assistant-message'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a question..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatApp;
