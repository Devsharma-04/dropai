import React from 'react';

export default function Loading() {
  return (
    <div style={styles.container}>
      <div className="spinner" style={styles.spinner}></div>
      <span style={{ color: '#7F8C8D', fontSize: '14px' }}>Drop AI is typing...</span>
    </div>
  );
}

const styles = {
  container: { display: 'flex', alignItems: 'center', gap: '8px', padding: '16px', justifyContent: 'center' },
  spinner: {
    width: '14px',
    height: '14px',
    border: '2px solid #2D2D3F',
    borderTop: '2px solid #6C5CE7',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
};