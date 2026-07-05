import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import EmptyState from './EmptyState';
import Loading from './Loading';

export default function MessageList({ messages, loading }) {
  const endOfMessagesRef = useRef(null);

  // Naye messages aane par auto-scroll niche le jane ke liye
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Agar messages array khali hai aur loading bhi nahi ho raha, toh empty state dikhao
  if ((!messages || messages.length === 0) && !loading) {
    return <EmptyState />;
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
      {messages && messages.map((msg) => (
        <ChatBubble key={msg.id} message={msg} />
      ))}
      
      {loading && <Loading />}
      
      <div ref={endOfMessagesRef} />
    </div>
  );
}