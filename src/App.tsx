import React from "react";
import AppRoutes from "./routes"; // Import routes
import ChatboxRoot from "@/components/chatbox/ChatboxRoot";


const App: React.FC = () => {
   return (
    <>
      <AppRoutes />
      <ChatboxRoot />
    </>
  );
};

export default App;
