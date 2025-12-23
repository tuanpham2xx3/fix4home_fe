import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { ChatMessage } from "@/types/chat";

const ChatboxRoot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "assistant",
      content: "Xin chào! Tôi là FixHome AI. Tôi có thể hỗ trợ gì cho bạn?",
      createdAt: Date.now(),
    },
  ]);

 const sendMessage = (text: string) => {
  if (!text.trim() || isLoading) return;

  const userMessage: ChatMessage = {
    id: crypto.randomUUID(),
    role: "user",
    content: text,
    createdAt: Date.now(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setIsLoading(true);

  setTimeout(() => {
    const aiMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "FixHome đã nhận yêu cầu của bạn. Tôi sẽ hỗ trợ ngay 👌",
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  }, 1000);
};


  return (
    <>
      <ChatButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ChatWindow
          onClose={() => setIsOpen(false)}
          messages={messages}
          onSend={sendMessage}
           isLoading={isLoading}
        />
      )}
    </>
  );
};

export default ChatboxRoot;
