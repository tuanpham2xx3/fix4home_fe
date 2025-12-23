import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

const ChatIcon = IoChatbubbleEllipsesOutline as React.ElementType;
const CloseIcon = IoClose as React.ElementType;

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatButton = ({ isOpen, onToggle }: Props) => {
  return (
    <button
      onClick={onToggle}
      className="
    fixed bottom-6 right-6 z-50
    w-14 h-14 rounded-full
    bg-secondary text-light
    flex items-center justify-center
    shadow-lg
    hover:bg-secondary/90
    focus:outline-none
    focus:ring-2 focus:ring-primary
    focus:ring-offset-2
  "
    >
      {isOpen ? <CloseIcon size={24} /> : <ChatIcon size={24} />}
    </button>
  );
};

export default ChatButton;
