import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import NotificationDropdown from "@/components/NotificationDropdown";
import { notificationData } from "@/mocks/notificationData";

const NotificationIcon = IoNotificationsOutline as React.ElementType;

const NotificationBell = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const unreadCount = notificationData.filter((n) => !n.isRead).length;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Thông báo"
        className="
          relative flex items-center justify-center
          w-8 h-8 rounded-full
          text-secondary hover:text-dark hover:bg-black/5 transition
        "
      >
        <NotificationIcon size={22} />

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1 leading-none">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 z-50">
          <NotificationDropdown
            isLoggedIn={isLoggedIn}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
