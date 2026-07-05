import React, { useState } from "react";
import { ChatProvider } from "./context/ChatContext";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [currentScreen, setScreen] = useState("Home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Home": return <Home setScreen={setScreen} />;
      case "Chat": return <Chat />;
      case "Profile": return <Profile />;
      default: return <Home setScreen={setScreen} />;
    }
  };

  return (
    <ChatProvider>
      <div className="mobile-frame">
        <div className="screen-container">
          {renderScreen()}
        </div>
        <BottomNav currentScreen={currentScreen} setScreen={setScreen} />
      </div>
    </ChatProvider>
  );
}