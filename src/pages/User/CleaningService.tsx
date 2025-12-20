import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";

import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import { veSinh, camket } from "@/assets/images";

// ===== DANH SÁCH DỊCH VỤ CON =====
const cleaningServices = [
  { number: 1, name: "Vệ sinh nhà cửa", path: "/vesinh/nha" },
  { number: 2, name: "Giặt sofa", path: "/vesinh/sofa" },
  { number: 3, name: "Tổng vệ sinh công trình", path: "/vesinh/cong-trinh" },
];

// ===== QUY TRÌNH RIÊNG CHO VỆ SINH =====
const cleaningProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận yêu cầu",
    headerColor: "bg-sky-100",
    items: [
      "Tiếp nhận nhu cầu vệ sinh từ khách hàng",
      "Xác định phạm vi và thời gian thực hiện",
    ],
  },
  {
    step: 2,
    title: "Khảo sát & báo giá",
    headerColor: "bg-blue-100",
    items: [
      "Khảo sát thực tế khu vực cần vệ sinh",
      "Báo giá chi tiết theo hạng mục",
    ],
  },
  {
    step: 3,
    title: "Triển khai vệ sinh",
    headerColor: "bg-green-100",
    items: [
      "Chuẩn bị dụng cụ và hóa chất chuyên dụng",
      "Tiến hành vệ sinh theo quy trình",
    ],
  },
  {
    step: 4,
    title: "Kiểm tra & bàn giao",
    headerColor: "bg-emerald-100",
    items: [
      "Kiểm tra lại toàn bộ khu vực đã vệ sinh",
      "Bàn giao và tiếp nhận phản hồi",
    ],
  },
];

// ===== CAM KẾT / BẢO HÀNH =====
const cleaningCommitment: CommitmentData = {
  title: "Cam Kết Dịch Vụ Vệ Sinh",
  description:
    "FixHome cam kết mang đến dịch vụ vệ sinh sạch sẽ, an toàn và chuyên nghiệp cho không gian sống và làm việc.",
  image: camket,
  items: [
    "Sử dụng hóa chất an toàn, thân thiện môi trường.",
    "Nhân viên làm việc cẩn thận, đúng quy trình.",
    "Đảm bảo sạch sẽ theo đúng hạng mục cam kết.",
    "Hỗ trợ xử lý lại nếu khách hàng chưa hài lòng.",
  ],
};

const CleaningService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={veSinh}
      subtitle="FixHome Services"
      title="Dịch Vụ Vệ Sinh"
      description="Cung cấp các dịch vụ vệ sinh chuyên nghiệp như vệ sinh nhà cửa, giặt sofa và tổng vệ sinh công trình."
      services={cleaningServices}
    >
      <ServiceProcess steps={cleaningProcess} />
      <ServiceCommitment data={cleaningCommitment} />
    </ServiceLayout>
  );
};

export default CleaningService;
