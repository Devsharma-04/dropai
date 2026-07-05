import React from 'react';

export default function Profile() {
  return (
    <div style={styles.container}>
      <div style={styles.avatar}>
        <span style={styles.avatarText}>U</span>
      </div>
      <h2 style={styles.name}>Drop AI User</h2>
      <p style={styles.email}>user@dropai.com</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#12121A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '40px',
    backgroundColor: '#6C5CE7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16px'
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: 'bold'
  },
  name: {
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0
  },
  email: {
    color: '#7F8C8D',
    fontSize: '14px',
    marginTop: '4px',
    margin: 0
  }
};