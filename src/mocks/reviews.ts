export interface Review {
  id: number;
  avatar: string;
  name: string;
  address: string;
  rating: number;
  comment: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/80?img=12",
    name: "Lan Anh",
    address: "Nhân viên văn phòng · Quận 2",
    rating: 4.9,
    comment:
      "Đặt lịch sửa ổ cắm trên app trong khoảng 2 phút, có báo thời gian dự kiến và giá tham khảo. Thợ đến đúng khung giờ, xử lý gọn gàng và cập nhật trạng thái hoàn thành ngay trên app. Hóa đơn điện tử gửi về Zalo tiện kiểm tra.",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/80?img=32",
    name: "Minh Trí",
    address: "Nhân viên văn phòng · Bình Thạnh",
    rating: 4.8,
    comment:
      "Đặt lắp quạt trần qua app, có xác nhận thợ và số điện thoại rõ ràng. Trong quá trình làm, app gửi thông báo từng bước nên dễ theo dõi. Sau lắp đặt mình đánh giá ngay trên app, hỗ trợ phản hồi nhanh.",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/80?img=47",
    name: "Thu Hà",
    address: "Nội trợ · Quận 7",
    rating: 4.9,
    comment:
      "Cần bảo trì điện cho cửa hàng, mình tạo yêu cầu trên app và đính kèm hình hiện trạng. Lịch hẹn được xác nhận nhanh, chi phí dự kiến hiển thị trước. Sau khi hoàn tất, biên bản nghiệm thu và bảo hành lưu trong hồ sơ trên app.",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/80?img=21",
    name: "Quốc Huy",
    address: "Thầy giáo · TP. Thủ Đức",
    rating: 4.8,
    comment:
      "Mình cần kiểm tra rò điện ở nhà tắm. Đặt lịch trên app, thợ có huy hiệu xác thực. Quá trình làm có chụp ảnh trước – sau trên app. Thanh toán QR ngay trong ứng dụng, hóa đơn lưu lại để tiện bảo hành.",
  },
];
