import React, { useState } from 'react';
import './ChatApp.css'; // Import CSS for styling
import { FaRobot, FaUser } from 'react-icons/fa'; // Import both icons

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
            <h2 className="chat-recommendation"><FaRobot style={{ marginRight: '8px' }} /> AI Assistant</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container ${msg.user ? 'user' : 'assistant'}`}>
                    {!msg.user && (
                        <div className="icon-container">
                            <FaRobot />
                        </div>
                    )}
                    <div className={`message ${msg.user ? 'user-message' : 'assistant-message'}`}>
                        {msg.text}
                    </div>
                    {msg.user && (
                        <div className="icon-container user-icon">
                            <FaUser />
                        </div>
                    )}
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
