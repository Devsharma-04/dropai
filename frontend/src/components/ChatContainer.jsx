import ChatMessage from "./ChatMessage";

function ChatContainer({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-5">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}
    </div>
  );
}

export default ChatContainer;