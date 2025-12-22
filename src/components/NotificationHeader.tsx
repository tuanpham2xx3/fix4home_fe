interface Props {
  unreadCount: number;
  onReadAll: () => void;
}

const NotificationHeader = ({ unreadCount, onReadAll }: Props) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-secondary">
          Thông báo
        </h1>
        {unreadCount > 0 && (
          <p className="mt-1 text-sm text-muted">
            Bạn có {unreadCount} thông báo chưa đọc
          </p>
        )}
      </div>

      {unreadCount > 0 && (
        <button
          onClick={onReadAll}
          className="text-sm font-medium text-secondary hover:underline"
        >
          Đọc tất cả
        </button>
      )}
    </div>
  );
};

export default NotificationHeader;
