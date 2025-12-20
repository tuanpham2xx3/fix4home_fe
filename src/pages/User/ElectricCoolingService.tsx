import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { dienLanh, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const electricCoolingServices = [
  { number: 1, name: "Sửa điều hòa", path: "/dienlanh/sua-dieu-hoa" },
  { number: 2, name: "Bảo dưỡng tủ lạnh", path: "/dienlanh/tu-lanh" },
  { number: 3, name: "Máy lạnh công nghiệp", path: "/dienlanh/may-lanh-cong-nghiep" },
];

// ===== QUY TRÌNH RIÊNG CHO ĐIỆN LẠNH =====
const electricCoolingProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận & kiểm tra",
    headerColor: "bg-sky-100",
    items: [
      "Tiếp nhận yêu cầu sửa chữa điện lạnh",
      "Kiểm tra tình trạng thiết bị",
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
    title: "Sửa chữa / bảo dưỡng",
    headerColor: "bg-green-100",
    items: [
      "Tiến hành sửa chữa hoặc bảo dưỡng",
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
const electricCoolingCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Điện Lạnh",
  description:
    "FixHome cam kết cung cấp dịch vụ điện lạnh an toàn, hiệu quả và bảo hành rõ ràng cho khách hàng.",
  image: camket,
  items: [
    "Kiểm tra đúng nguyên nhân, sửa đúng lỗi.",
    "Linh kiện thay thế đảm bảo chất lượng.",
    "Thi công gọn gàng, không ảnh hưởng sinh hoạt.",
    "Bảo hành dịch vụ sau khi hoàn thành.",
  ],
};

const ElectricCoolingService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={dienLanh}
      subtitle="FixHome Services"
      title="Dịch Vụ Điện Lạnh"
      description="Cung cấp các dịch vụ sửa chữa và bảo dưỡng điện lạnh như điều hòa, tủ lạnh và hệ thống máy lạnh công nghiệp."
      services={electricCoolingServices}
    >
      <ServiceProcess steps={electricCoolingProcess} />
      <ServiceCommitment data={electricCoolingCommitment} />
    </ServiceLayout>
  );
};

export default ElectricCoolingService;
