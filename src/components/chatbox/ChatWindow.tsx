import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { ChatMessage } from "@/types/chat";

interface Props {
  onClose: () => void;
  messages: ChatMessage[];
  onSend: (text: string) => void;
    isLoading: boolean;
}

const ChatWindow = ({ onClose, messages, onSend ,  isLoading}: Props) => {
  return (
    <div
      className="
        fixed z-40
        right-6
        bottom-24   

        bg-white shadow-2xl
        flex flex-col overflow-hidden

        w-[92vw]
        h-[65vh]
        rounded-2xl

        /* Tablet */
        sm:w-[420px]
        sm:h-[480px]

        lg:w-[720px]
        lg:h-[760px]
        lg:rounded-2xl
      "
    >
      <ChatHeader onClose={onClose} />
   <ChatMessages messages={messages} isLoading={isLoading} />

      <ChatInput onSend={onSend} />
    </div>
  );
};

export default ChatWindow;
