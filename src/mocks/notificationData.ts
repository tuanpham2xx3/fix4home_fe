import { Notification } from "@/types/notification";

export const notificationData: Notification[] = [
  {
    id: 1,
    title: "Đặt lịch thành công",
    message:
      "Bạn đã đặt lịch dịch vụ “Sửa chữa điện nước” thành công. Thợ sẽ liên hệ sớm.",
    type: "BOOKING_SUCCESS",
    createdAt: "2 giờ trước",
    isRead: false,
  },
  {
    id: 2,
    title: "Thợ đã nhận đơn",
    message:
      "Thợ Nguyễn Văn A đã nhận đơn dịch vụ của bạn. Vui lòng chuẩn bị sẵn sàng.",
    type: "TECH_ACCEPTED",
    createdAt: "3 giờ trước",
    isRead: false,
  },
  {
    id: 3,
    title: "Thợ đang trên đường",
    message:
      "Thợ đã xuất phát và sẽ đến địa chỉ của bạn trong khoảng 20 phút nữa.",
    type: "TECH_ON_THE_WAY",
    createdAt: "6 giờ trước",
    isRead: true,
  },
  {
    id: 4,
    title: "Hoàn thành dịch vụ",
    message:
      "Dịch vụ đã hoàn thành. Vui lòng đánh giá chất lượng dịch vụ.",
    type: "BOOKING_COMPLETED",
    createdAt: "1 ngày trước",
    isRead: true,
  },
  {
    id: 5,
    title: "Tin nhắn mới",
    message:
      "Bạn có tin nhắn mới từ FixHome. Vui lòng kiểm tra hộp thư.",
    type: "NEW_MESSAGE",
    createdAt: "1 ngày trước",
    isRead: true,
  },
  {
    id: 6,
    title: "Khuyến mãi đặc biệt",
    message:
      "Giảm 20% cho dịch vụ chống thấm trong tháng này. Đặt ngay để nhận ưu đãi.",
    type: "PROMOTION",
    createdAt: "2 ngày trước",
    isRead: false,
  },
];
