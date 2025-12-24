import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { ChatMessage } from "@/types/chat";
import { sendGuestChat } from "@/services/chat.service";

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
  const getGuestSessionId = () => {
    let sessionId = localStorage.getItem("fixhome_guest_session");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("fixhome_guest_session", sessionId);
    }
    return sessionId;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const sessionId = getGuestSessionId();

      const res = await sendGuestChat(sessionId, text);

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: res.reply,
        createdAt: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Xin lỗi, FixHome AI đang bận. Vui lòng thử lại sau.",
          createdAt: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
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
