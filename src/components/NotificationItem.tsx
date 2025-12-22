import { Notification } from "@/types/notification";

const ICON_MAP: Record<string, string> = {
  BOOKING_SUCCESS: "✅",
  TECH_ACCEPTED: "👷",
  TECH_ON_THE_WAY: "🚗",
  BOOKING_COMPLETED: "✔️",
  NEW_MESSAGE: "💬",
  PROMOTION: "🎁",
};

interface Props {
  data: Notification;
  onRead: (id: number) => void;
}

const NotificationItem = ({ data, onRead }: Props) => {
  return (
    <div
      onClick={() => onRead(data.id)}
      className={`
        flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition
        ${data.isRead ? "bg-white" : "bg-blue-50 border-blue-200"}
      `}
    >
      <div className="text-2xl">{ICON_MAP[data.type]}</div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-dark">
            {data.title}
          </h4>
          {!data.isRead && (
            <span className="h-2 w-2 rounded-full bg-primary" />
          )}
        </div>

        <p className="mt-1 text-sm text-muted line-clamp-2">
          {data.message}
        </p>

        <p className="mt-2 text-xs text-muted">
          {data.createdAt}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
