import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { dienMay, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const electricApplianceServices = [
  { number: 1, name: "Sửa máy giặt", path: "/dienmay/may-giat" },
  { number: 2, name: "Sửa máy nước nóng", path: "/dienmay/may-nuoc-nong" },
  { number: 3, name: "Bếp điện – lò vi sóng", path: "/dienmay/bep-lo" },
];

// ===== QUY TRÌNH RIÊNG CHO ĐIỆN MÁY =====
const electricApplianceProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận & kiểm tra thiết bị",
    headerColor: "bg-slate-100",
    items: [
      "Tiếp nhận yêu cầu sửa chữa điện máy",
      "Kiểm tra tình trạng và lỗi thiết bị",
    ],
  },
  {
    step: 2,
    title: "Tư vấn & báo giá",
    headerColor: "bg-blue-100",
    items: [
      "Xác định nguyên nhân hư hỏng",
      "Báo giá chi tiết trước khi sửa",
    ],
  },
  {
    step: 3,
    title: "Sửa chữa & thay thế linh kiện",
    headerColor: "bg-green-100",
    items: [
      "Tiến hành sửa chữa hoặc thay thế",
      "Đảm bảo thiết bị vận hành ổn định",
    ],
  },
  {
    step: 4,
    title: "Kiểm tra & bàn giao",
    headerColor: "bg-amber-100",
    items: [
      "Chạy thử và kiểm tra lại thiết bị",
      "Bàn giao và hướng dẫn sử dụng",
    ],
  },
];

// ===== CAM KẾT / BẢO HÀNH =====
const electricApplianceCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Điện Máy",
  description:
    "FixHome cam kết mang đến dịch vụ sửa chữa điện máy nhanh chóng, an toàn và bảo hành minh bạch.",
  image: camket,
  items: [
    "Kiểm tra đúng lỗi, sửa đúng vấn đề.",
    "Linh kiện thay thế đảm bảo chất lượng.",
    "Thi công gọn gàng, an toàn khi sử dụng.",
    "Bảo hành rõ ràng sau khi hoàn thành.",
  ],
};

const ElectricApplianceService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={dienMay}
      subtitle="FixHome Services"
      title="Dịch Vụ Điện Máy"
      description="Cung cấp các dịch vụ sửa chữa điện máy như máy giặt, máy nước nóng và các thiết bị nhà bếp."
      services={electricApplianceServices}
    >
      <ServiceProcess steps={electricApplianceProcess} />
      <ServiceCommitment data={electricApplianceCommitment} />
    </ServiceLayout>
  );
};

export default ElectricApplianceService;
