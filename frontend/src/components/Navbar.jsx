import React from 'react';

export default function Navbar({ title, onRightPress, rightIcon }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      {rightIcon && (
        <button onClick={onRightPress} style={styles.button}>
          {rightIcon}
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: '60px',
    backgroundColor: '#1E1E2E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    borderBottom: '1px solid #2D2D3F'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  button: {
    background: 'none',
    border: 'none',
    color: '#FF4A5A',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};