import React from 'react';
import { FaQuestionCircle, FaFileUpload, FaPaperclip, FaUserMd, FaRobot } from 'react-icons/fa';
import ChatApp from './components/ChatApp';
const HealthAssistant = () => (
    <div 
        className="card" 
        style={{ 
            padding: '15px', 
            maxWidth: '400px', 
            margin: '0 auto 20px auto', 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}
    >
        {/* Title */}
        <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>
            Health Assistant <FaQuestionCircle />
        </h2>
        <ChatApp></ChatApp>

        {/* Input field for asking a question */}
        {/* <input 
            type="text" 
            placeholder="Ask a question" 
            style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '15px', 
                borderRadius: '6px', 
                border: '1px solid #ddd', 
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)' 
            }} 
        />
        
        {/* Ask button */}
        {/* <button 
            style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '15px', 
                backgroundColor: '#28a745', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '6px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}
        >
            <FaQuestionCircle style={{ marginRight: '8px' }} /> Ask
        </button>
         */}
        {/* Suggested questions */}
        <div style={{ marginBottom: '15px' }}>
            <h4 style={{ marginBottom: '10px' }}>Suggested Questions</h4>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                    How can I improve my sleep quality based on my recent data?
                </li>
                <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                     What exercises would you recommend to complement my current fitness routine?
                </li>
                <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                    What adjustments should I make to my daily routine based on my sleep stats?
                </li>
                <li style={{ padding: '10px' }}>
                    What type of exercises would complement my current fitness routine?
                </li>
            </ul>
        </div>

        {/* File upload and attach buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <button 
                style={{ 
                    flex: 1, 
                    marginRight: '10px', 
                    padding: '10px', 
                    backgroundColor: '#28a745', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
            >
                <FaFileUpload style={{ marginRight: '8px' }} /> Choose file
            </button>
            <button 
                style={{ 
                    flex: 1, 
                    padding: '10px', 
                    backgroundColor: '#28a745', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
            >
                <FaPaperclip style={{ marginRight: '8px' }} /> Attach
            </button>
        </div>

        {/* Connect with live doctor and chat with AI buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button 
                style={{ 
                    flex: 1, 
                    marginRight: '10px', 
                    padding: '10px', 
                    backgroundColor: '#28a745', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
            >
                <FaUserMd style={{ marginRight: '8px' }} /> Connect with Live Doctor
            </button>
            <button 
                style={{ 
                    flex: 1, 
                    padding: '10px', 
                    backgroundColor: '#28a745', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
            >
                <FaRobot style={{ marginRight: '8px' }} /> Chat with AI
            </button>
        </div>
    </div>
);

export default HealthAssistant;
