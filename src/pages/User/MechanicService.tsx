import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { cokhi, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const mechanicServices = [
  { number: 1, name: "Cửa sắt", path: "/cokhi/cua-sat" },
  { number: 2, name: "Cổng nhôm", path: "/cokhi/cong-nhom" },
  { number: 3, name: "Hàn xì", path: "/cokhi/han-xi" },
];

// ===== QUY TRÌNH RIÊNG CHO CƠ KHÍ =====
const mechanicProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận & khảo sát",
    headerColor: "bg-slate-100",
    items: [
      "Tiếp nhận yêu cầu gia công cơ khí",
      "Khảo sát kích thước và hiện trạng",
    ],
  },
  {
    step: 2,
    title: "Tư vấn & báo giá",
    headerColor: "bg-blue-100",
    items: [
      "Tư vấn vật liệu và phương án thi công",
      "Báo giá chi tiết theo hạng mục",
    ],
  },
  {
    step: 3,
    title: "Gia công & lắp đặt",
    headerColor: "bg-green-100",
    items: [
      "Gia công theo bản vẽ và yêu cầu",
      "Lắp đặt đúng kỹ thuật, an toàn",
    ],
  },
  {
    step: 4,
    title: "Nghiệm thu & bảo hành",
    headerColor: "bg-amber-100",
    items: [
      "Kiểm tra chất lượng hoàn thiện",
      "Bàn giao và áp dụng bảo hành",
    ],
  },
];

// ===== CAM KẾT / BẢO HÀNH =====
const mechanicCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Cơ Khí",
  description:
    "FixHome cam kết cung cấp dịch vụ cơ khí chính xác, bền bỉ và an toàn cho mọi công trình.",
  image: camket,
  items: [
    "Gia công đúng kích thước và bản vẽ.",
    "Vật liệu đạt tiêu chuẩn, bền và an toàn.",
    "Thi công cẩn thận, không ảnh hưởng tài sản.",
    "Bảo hành rõ ràng sau khi hoàn thiện.",
  ],
};

const MechanicService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={cokhi}
      subtitle="FixHome Services"
      title="Dịch Vụ Cơ Khí"
      description="Cung cấp các dịch vụ gia công và lắp đặt cơ khí như cửa sắt, cổng nhôm và hàn xì với chất lượng cao."
      services={mechanicServices}
    >
      <ServiceProcess steps={mechanicProcess} />
      <ServiceCommitment data={mechanicCommitment} />
    </ServiceLayout>
  );
};

export default MechanicService;
