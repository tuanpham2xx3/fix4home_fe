import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { thongNghet, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const drainServices = [
  { number: 1, name: "Thông cống", path: "/thong-nghet/thong-cong" },
  { number: 2, name: "Thông bồn cầu", path: "/thong-nghet/thong-bon-cau" },
];

// ===== QUY TRÌNH RIÊNG CHO THÔNG NGHẸT =====
const drainProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận sự cố",
    headerColor: "bg-sky-100",
    items: [
      "Tiếp nhận tình trạng nghẹt từ khách hàng",
      "Xác định mức độ và vị trí tắc nghẽn",
    ],
  },
  {
    step: 2,
    title: "Khảo sát & báo giá",
    headerColor: "bg-blue-100",
    items: [
      "Khảo sát nhanh hiện trạng thực tế",
      "Báo giá minh bạch trước khi xử lý",
    ],
  },
  {
    step: 3,
    title: "Xử lý thông nghẹt",
    headerColor: "bg-green-100",
    items: [
      "Sử dụng thiết bị chuyên dụng",
      "Xử lý triệt để nguyên nhân gây nghẹt",
    ],
  },
  {
    step: 4,
    title: "Kiểm tra & bàn giao",
    headerColor: "bg-amber-100",
    items: [
      "Kiểm tra lại hệ thống sau xử lý",
      "Bàn giao và hướng dẫn sử dụng",
    ],
  },
];

// ===== CAM KẾT / BẢO HÀNH =====
const drainCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Thông Nghẹt",
  description:
    "FixHome cam kết xử lý thông nghẹt nhanh chóng, sạch sẽ và triệt để cho mọi công trình.",
  image: camket,
  items: [
    "Xử lý dứt điểm, hạn chế tái nghẹt.",
    "Thi công nhanh gọn, sạch sẽ.",
    "Không đục phá nếu không cần thiết.",
    "Hỗ trợ kiểm tra lại sau khi hoàn thành.",
  ],
};

const DrainCleaningService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={thongNghet}
      subtitle="FixHome Services"
      title="Dịch Vụ Thông Nghẹt"
      description="Cung cấp các dịch vụ thông cống, thông bồn cầu nhanh chóng, hiệu quả và an toàn."
      services={drainServices}
    >
      <ServiceProcess steps={drainProcess} />
      <ServiceCommitment data={drainCommitment} />
    </ServiceLayout>
  );
};

export default DrainCleaningService;
