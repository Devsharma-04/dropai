import React from 'react';

export default function EmptyState() {
  return (
    <div style={styles.container}>
      <div style={{ fontSize: '50px', marginBottom: '12px' }}>💧</div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Welcome to Drop AI</h2>
      <p style={{ color: '#7F8C8D', fontSize: '14px', marginTop: '6px', textAlign: 'center', padding: '0 30px' }}>
        How can I assist your productivity today?
      </p>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }
};