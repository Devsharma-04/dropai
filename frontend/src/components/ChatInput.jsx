import React, { useState } from 'react';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSend} style={styles.container}>
      <input
        style={styles.input}
        type="text"
        placeholder="Ask Drop AI anything..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
      />
      <button 
        type="submit" 
        style={{...styles.button, ...( (!text.trim() || disabled) ? styles.disabled : {} )}}
        disabled={!text.trim() || disabled}
      >
        Send
      </button>
    </form>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: '14px',
    backgroundColor: '#1E1E2E',
    borderTop: '1px solid #2D2D3F',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#2D2D3F',
    border: 'none',
    color: '#FFFFFF',
    padding: '12px 16px',
    borderRadius: '24px',
    fontSize: '15px',
    outline: 'none'
  },
  button: {
    marginLeft: '10px',
    backgroundColor: '#6C5CE7',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  },
  disabled: {
    backgroundColor: '#4A4A6A',
    opacity: 0.6,
    cursor: 'not-allowed'
  }
};