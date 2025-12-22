import { useState } from "react";
import { notificationData } from "@/mocks/notificationData";
import { Notification } from "@/types/notification";
import NotificationHeader from "@/components/NotificationHeader";
import NotificationItem from "@/components/NotificationItem";

const NotificationPage = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationData);

  const unreadCount = notifications.filter(
    (n) => !n.isRead
  ).length;

  const handleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
  };

  const handleReadAll = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    );
  };

  return (
    <div className="min-h-screen bg-light font-sans">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <NotificationHeader
          unreadCount={unreadCount}
          onReadAll={handleReadAll}
        />

        <div className="space-y-4">
          {notifications.map((item) => (
            <NotificationItem
              key={item.id}
              data={item}
              onRead={handleRead}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
