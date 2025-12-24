import { IoClose } from "react-icons/io5";

const CloseIcon = IoClose as React.ElementType;

interface Props {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: Props) => {
  return (
<div
  className="
    flex items-center justify-between
    px-4 py-3
    bg-secondary text-light
    border-b border-secondary/80
  "
>

      <div>
        <div className="font-semibold text-sm">FixHome AI</div>
        <div className="text-xs opacity-80">Trợ lý tư vấn dịch vụ</div>
      </div>

      <button onClick={onClose}>
        <CloseIcon size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;
