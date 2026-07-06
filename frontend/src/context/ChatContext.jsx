import { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api'; 

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    generateNewSession();
  }, []);

  const generateNewSession = () => {
    const newId = crypto.randomUUID();
    setSessionId(newId);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { id: `user-${Date.now()}`, sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const botMessageId = `bot-${Date.now()}`;
    const initialBotMessage = { id: botMessageId, sender: 'bot', text: '' };
    setMessages((prev) => [...prev, initialBotMessage]);

    try {
      // Yahan 'chat/' likhne se ye baseURL ke saath milkar /api/chat/ ban jayega
      const response = await api.post('chat/', { 
        message: text,
        session_id: sessionId 
      }, {
        responseType: 'text', 
        onDownloadProgress: (progressEvent) => {
          const accumulatedText = progressEvent.event.target.responseText;
          setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.id === botMessageId ? { ...msg, text: accumulatedText } : msg
            )
          );
        }
      });
    } catch (error) {
      console.error("Streaming failure:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === botMessageId ? { ...msg, text: 'Drop AI connection lost.' } : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    generateNewSession();
  };

  return (
    <ChatContext.Provider value={{ messages, loading, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);