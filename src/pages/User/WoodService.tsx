import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { doGo, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const woodServices = [
  { number: 1, name: "Sửa tủ", path: "/dogo/sua-tu" },
  { number: 2, name: "Sửa bàn ghế", path: "/dogo/sua-ban-ghe" },
  { number: 3, name: "Lắp ráp nội thất", path: "/dogo/noi-that" },
];

// ===== QUY TRÌNH RIÊNG CHO ĐỒ GỖ =====
const woodProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận & kiểm tra đồ gỗ",
    headerColor: "bg-amber-100",
    items: [
      "Tiếp nhận yêu cầu sửa chữa đồ gỗ",
      "Kiểm tra tình trạng và mức độ hư hỏng",
    ],
  },
  {
    step: 2,
    title: "Tư vấn & báo giá",
    headerColor: "bg-yellow-100",
    items: [
      "Tư vấn phương án sửa chữa hoặc lắp ráp",
      "Báo giá chi tiết theo hạng mục",
    ],
  },
  {
    step: 3,
    title: "Sửa chữa / lắp ráp",
    headerColor: "bg-green-100",
    items: [
      "Tiến hành sửa chữa hoặc lắp ráp nội thất",
      "Đảm bảo tính thẩm mỹ và độ bền",
    ],
  },
  {
    step: 4,
    title: "Hoàn thiện & bàn giao",
    headerColor: "bg-amber-200",
    items: [
      "Kiểm tra lại sản phẩm sau hoàn thiện",
      "Bàn giao và hướng dẫn sử dụng",
    ],
  },
];

// ===== CAM KẾT / BẢO HÀNH =====
const woodCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Đồ Gỗ",
  description:
    "FixHome cam kết cung cấp dịch vụ sửa chữa và lắp ráp đồ gỗ tỉ mỉ, bền đẹp và đúng yêu cầu của khách hàng.",
  image: camket,
  items: [
    "Sửa chữa cẩn thận, đảm bảo tính thẩm mỹ.",
    "Vật liệu và phụ kiện phù hợp với từng loại đồ gỗ.",
    "Thi công gọn gàng, không ảnh hưởng không gian sống.",
    "Bảo hành dịch vụ sau khi hoàn thành.",
  ],
};

const WoodService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={doGo}
      subtitle="FixHome Services"
      title="Dịch Vụ Đồ Gỗ"
      description="Cung cấp các dịch vụ sửa chữa và lắp ráp đồ gỗ như sửa tủ, sửa bàn ghế và lắp ráp nội thất."
      services={woodServices}
    >
      <ServiceProcess steps={woodProcess} />
      <ServiceCommitment data={woodCommitment} />
    </ServiceLayout>
  );
};

export default WoodService;
