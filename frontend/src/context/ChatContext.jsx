import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api'; 

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  // 🔴 Har user ke liye unique session ID manage karne ke liye state
  const [sessionId, setSessionId] = useState('');

  // Page load hote hi ek unique session ID generate karein
  useEffect(() => {
    generateNewSession();
  }, []);

  const generateNewSession = () => {
    // Ek random unique string banata hai jaise "f47ac10b-58cc-4372-a567-0e02b2c3d479"
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
      // 🔴 Axios body me message ke sath 'session_id' bhi bhej rahe hain
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

  // 🔴 Clear Chat karne par purani history screen se to hategi hi, sath me naya session bhi ban jayega
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