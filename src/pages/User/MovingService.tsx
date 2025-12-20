import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { chuyenNha, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const movingServices = [
  { number: 1, name: "Chuyển đồ", path: "/chuyen-nha/chuyen-do" },
  { number: 2, name: "Dọn dẹp sau chuyển", path: "/chuyen-nha/don-dep" },
];

// ===== QUY TRÌNH RIÊNG CHO CHUYỂN NHÀ =====
const movingProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận yêu cầu chuyển nhà",
    headerColor: "bg-sky-100",
    items: [
      "Tiếp nhận thông tin khối lượng đồ đạc",
      "Xác định thời gian và địa điểm chuyển",
    ],
  },
  {
    step: 2,
    title: "Khảo sát & báo giá",
    headerColor: "bg-blue-100",
    items: [
      "Khảo sát thực tế (nếu cần)",
      "Báo giá chi tiết, minh bạch",
    ],
  },
  {
    step: 3,
    title: "Đóng gói & vận chuyển",
    headerColor: "bg-green-100",
    items: [
      "Đóng gói đồ đạc cẩn thận",
      "Vận chuyển an toàn đến địa điểm mới",
    ],
  },
  {
    step: 4,
    title: "Sắp xếp & bàn giao",
    headerColor: "bg-amber-100",
    items: [
      "Sắp xếp đồ đạc theo yêu cầu",
      "Bàn giao và xác nhận hoàn tất",
    ],
  },
];

// ===== CAM KẾT / BẢO HÀNH =====
const movingCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Chuyển Nhà",
  description:
    "FixHome cam kết cung cấp dịch vụ chuyển nhà nhanh chóng, an toàn và gọn gàng cho mọi gia đình.",
  image: camket,
  items: [
    "Đóng gói và vận chuyển cẩn thận, hạn chế trầy xước.",
    "Đảm bảo đúng thời gian đã thỏa thuận.",
    "Không thất lạc hoặc hư hỏng đồ đạc.",
    "Hỗ trợ xử lý nếu phát sinh sự cố.",
  ],
};

const MovingService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={chuyenNha}
      subtitle="FixHome Services"
      title="Dịch Vụ Chuyển Nhà"
      description="Cung cấp các dịch vụ chuyển đồ và dọn dẹp sau chuyển nhà nhanh chóng, tiện lợi và an toàn."
      services={movingServices}
    >
      <ServiceProcess steps={movingProcess} />
      <ServiceCommitment data={movingCommitment} />
    </ServiceLayout>
  );
};

export default MovingService;
