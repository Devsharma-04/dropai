import React from 'react';
import Navbar from '../components/Navbar';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';
import { useChat } from '../context/ChatContext';

export default function Chat() {
  const { messages, loading, sendMessage, clearChat } = useChat();

  return (
    <div style={styles.container}>
      <Navbar title="Drop AI Chat" rightIcon="Clear" onRightPress={clearChat} />
      <MessageList messages={messages} loading={loading} />
      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#12121A',
    height: '100%'
  }
};