import React from 'react';

export default function Home({ setScreen }) {
  return (
    <div style={styles.container}>
      {/* 🟢 Premium Neon Logo */}
      <div style={styles.logoWrapper}>
        <img 
          src="/icon-512x512.png" 
          alt="Drop AI Logo" 
          style={styles.logo} 
        />
      </div>

      <h1 style={styles.welcome}>Welcome to Drop AI</h1>
      <p style={styles.description}>Your intelligent workspace assistant is ready.</p>
      
      <button style={styles.button} onClick={() => setScreen('Chat')}>
        Launch Drop AI
      </button>

      {/* 🟢 Proud Creator Identity Section */}
      <div style={styles.footerContainer}>
        <div style={styles.companyName}>Dream Career Product</div>
        <div style={styles.teamList}>
          Developed by: 
          <span style={styles.member}> Aditya (7B-2)</span> • 
          <span style={styles.member}> Siddharth (7B-36)</span> • 
          <span style={styles.member}> Daksh (7B-10)</span>
        </div>
        <div style={styles.founderText}>
          Guided by Visionary Founder: <span style={styles.founderName}>Dev Sharma</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#11141a', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
    textAlign: 'center',
    height: '100%',
    position: 'relative'
  },
  logoWrapper: {
    marginBottom: '20px',
  },
  logo: {
    width: '130px',
    height: '130px',
    borderRadius: '28px',
    boxShadow: '0 0 25px rgba(0, 229, 255, 0.3)', 
  },
  welcome: {
    color: '#00e5ff', 
    fontSize: '28px',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '0 0 10px rgba(0, 229, 255, 0.2)'
  },
  description: {
    color: '#7F8C8D',
    fontSize: '15px',
    marginTop: '10px',
    marginBottom: '28px',
    lineHeight: '1.4',
    maxWidth: '300px'
  },
  button: {
    background: 'linear-gradient(135deg, #00e5ff, #0095ff)', 
    color: '#11141a', 
    border: 'none',
    padding: '14px 32px',
    borderRadius: '28px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 229, 255, 0.4)',
    marginBottom: '60px' 
  },
  footerContainer: {
    position: 'absolute',
    bottom: '15px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '10px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 229, 255, 0.1)'
  },
  companyName: {
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#7F8C8D',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  teamList: {
    fontSize: '12px',
    color: '#ffffff',
  },
  member: {
    color: '#00e5ff',
    fontWeight: '600'
  },
  founderText: {
    fontSize: '11px',
    color: '#a0aec0',
    marginTop: '2px'
  },
  founderName: {
    color: '#0095ff',
    fontWeight: 'bold'
  }
};