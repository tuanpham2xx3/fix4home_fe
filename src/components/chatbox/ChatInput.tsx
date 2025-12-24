import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

const ChatInput = ({ onSend }: Props) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-3 border-t border-muted/20 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Nhập câu hỏi..."
        className="
          flex-1 bg-light text-dark
          border border-muted/30 rounded-lg
          px-3 py-2 text-sm
          placeholder:text-muted
          focus:outline-none
          focus:ring-2 focus:ring-primary
        "
      />
      <button
        onClick={handleSend}
        className="
          bg-secondary text-light
          px-4 rounded-lg text-sm
          hover:bg-secondary/90
          focus:ring-2 focus:ring-primary
        "
      >
        Gửi
      </button>
    </div>
  );
};

export default ChatInput;
