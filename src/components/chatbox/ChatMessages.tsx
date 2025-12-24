import { useEffect, useRef } from "react";
import { ChatMessage } from "@/types/chat";

interface Props {
  messages: ChatMessage[];
  isLoading: boolean;
}

const ChatMessages = ({ messages, isLoading }: Props) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-light">
      {messages.map((msg) => {
        const isUser = msg.role === "user";

        return (
          <div
            key={msg.id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-[82%] lg:max-w-[94%]
                px-4 py-3 rounded-xl text-sm
                ${
                  isUser
                    ? "bg-primary text-dark"
                    : "bg-white text-dark border border-muted/20"
                }
              `}
            >
              {msg.content}
            </div>
          </div>
        );
      })}

      {isLoading && (
  <div className="flex justify-start">
    <div className="
      max-w-[60%]
      px-4 py-3 rounded-xl text-sm
      bg-white text-muted border border-muted/20
      italic
    ">
      FixHome AI đang trả lời…
    </div>
  </div>
)}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessages;
