import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ChatBubble({ message }) {
  if (!message || !message.text) return null;

  const isUser = message.sender === 'user';

  const bubbleStyle = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    margin: '14px 0',
    padding: '0 18px',
  };

  const innerStyle = {
    maxWidth: '75%',
    padding: '14px 20px',
    borderRadius: '18px',
    fontSize: '15px',
    lineHeight: '1.6',
    wordBreak: 'break-word',
    backgroundColor: isUser ? '#4A3AFF' : '#232334',
    color: isUser ? '#FFFFFF' : '#F1F1F5',
    borderBottomRightRadius: isUser ? '4px' : '18px',
    borderBottomLeftRadius: isUser ? '18px' : '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  };

  return (
    <div style={bubbleStyle}>
      <div style={innerStyle}>
        {isUser ? (
          <span style={{ whiteSpace: 'pre-wrap' }}>{message.text}</span>
        ) : (
          /* Bot response ko markdown format me ChatGPT ki tarah render karein */
          <div className="markdown-body">
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}