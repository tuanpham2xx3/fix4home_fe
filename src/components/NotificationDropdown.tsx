import { Link } from "react-router-dom";
import { notificationData } from "@/mocks/notificationData";

interface Props {
  isLoggedIn: boolean;
  onClose: () => void;
}

const NotificationDropdown = ({ isLoggedIn, onClose }: Props) => {
  if (!isLoggedIn) {
    return (
      <div className="w-80 rounded-xl bg-white shadow-lg border p-4">
        <p className="text-sm text-muted">
          Bạn cần đăng nhập để xem thông báo
        </p>
        <Link
          to="/dang-nhap"
          onClick={onClose}
          className="mt-3 block text-center rounded-lg bg-primary px-4 py-2 font-medium text-dark"
        >
          Đăng nhập
        </Link>
      </div>
    );
  }

  const unread = notificationData.filter(n => !n.isRead).slice(0, 5);

  if (unread.length === 0) {
    return (
      <div className="w-80 rounded-xl bg-white shadow-lg border p-6 text-center">
        <div className="text-2xl">📭</div>
        <p className="mt-2 text-sm text-muted">
          Bạn chưa có thông báo mới
        </p>
        <Link
          to="/thong-bao"
          onClick={onClose}
          className="mt-3 inline-block text-sm font-medium text-secondary hover:underline"
        >
          Xem tất cả
        </Link>
      </div>
    );
  }

  return (
    <div className="w-96 rounded-xl bg-white shadow-lg border">
      <div className="px-4 py-3 border-b font-medium text-dark">
        Thông báo mới
      </div>

      <div className="max-h-80 overflow-auto divide-y">
        {unread.map(item => (
          <div key={item.id} className="px-4 py-3 hover:bg-gray-50">
            <p className="text-sm font-medium text-dark">
              {item.title}
            </p>
            <p className="mt-0.5 text-xs text-muted line-clamp-2">
              {item.message}
            </p>
            <p className="mt-1 text-[11px] text-muted">
              {item.createdAt}
            </p>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 border-t text-center">
        <Link
          to="/thong-bao"
          onClick={onClose}
          className="text-sm font-medium text-secondary hover:underline"
        >
          Xem tất cả
        </Link>
      </div>
    </div>
  );
};

export default NotificationDropdown;
