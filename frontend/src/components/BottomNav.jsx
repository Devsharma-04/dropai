import React from 'react';

export default function BottomNav({ currentScreen, setScreen }) {
  const tabs = ['Home', 'Chat', 'Profile'];

  return (
    <div style={styles.container}>
      {tabs.map((tab) => {
        const isActive = currentScreen === tab;
        return (
          <button 
            key={tab} 
            onClick={() => setScreen(tab)} 
            style={{...styles.tab, color: isActive ? '#6C5CE7' : '#7F8C8D', fontWeight: isActive ? 'bold' : '500'}}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '65px',
    backgroundColor: '#1E1E2E',
    borderTop: '1px solid #2D2D3F',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tab: {
    background: 'none',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    flex: 1,
    height: '100%'
  }
};