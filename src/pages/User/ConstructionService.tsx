import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceCommitment from "@/components/ServiceCommitment";
import {xayDung, baoHanh } from "@/assets/images";
import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";

const constructionServices = [
  {
    number: 1,
    name: "Sửa nhà",
    path: "/xaydung/sua-nha",
  },
  {
    number: 2,
    name: "Ốp lát",
    path: "/xaydung/op-lat",
  },
  {
    number: 3,
    name: "Sơn tường",
    path: "/xaydung/son-tuong",
  },
  {
    number: 4,
    name: "Trần thạch cao",
    path: "/xaydung/tran-thach-cao",
  },
];

const constructionProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Khảo sát & tiếp nhận yêu cầu",
    headerColor: "bg-orange-100",
    items: [
      "Khách hàng cung cấp nhu cầu sửa chữa / xây dựng",
      "Tư vấn về hình thức, phong cách kiến trúc phù hợp với điều kiện tự nhiên, diện tích, vị trí và mong muốn của khách hàng.",
    ],
  },
  {
    step: 2,
    title: "Tư vấn & báo giá",
    headerColor: "bg-yellow-100",
    items: [
      "Nếu khách hàng đã có bảng thiết kế – Báo giá theo bảng thiết kế  (Không tốn phí thiết kế)",
      "Nếu khách hàng chưa có bảng thiết kế – Lập bản vẽ – Báo giá thiết kế (Có tốn phí thiết kế)",
    ],
  },
  {
    step: 3,
    title: "Thiết kế sơ bộ",
    headerColor: "bg-green-100",
    items: [
      "Sau khi báo giá, thợ xây dựng sẽ lên bảng vẽ thiết kế sơ bộ cho khách hàng",
      "Bảng thiết kế dựa trên mong muốn và yêu cầu cụ thể.",
    ],
  },
  {
    step: 4,
    title: "Triển khai hồ sơ bản vẽ ",
    headerColor: "bg-blue-100",
    items: [
      "Khách hàng đồng ý bản thiết kế, tiến hành triển khai theo bản vẽ",
      "Chuẩn bị cho quá trình thi công",
    ],
  },
  {
    step: 5,
    title: "Thi công từ thô – hoàn thiện ",
    headerColor: "bg-green-100",
    items: [
      "Đội thợ xây dựng tiến hành thi công dự án",
      "Đảm bảo đúng tiến độ, chất lượng,  nhiều yếu tố khác ",
    ],
  },
  {
    step: 6,
    title: "Nghiệm thu – Bàn giao ",
    headerColor: "bg-blue-100",
    items: [
      "Tiếp tục giám sát và bảo dưỡng các hạng mục của dự án.",
      "Bàn giao lại dự án cho khách hàng",
      "Hỗ trợ khách hàng trong mọi vấn đề phát sinh từ phía công ty, đảm bảo sự hài lòng của quý khách hàng.",
    ],
  },
];

// ===== DATA: CAM KẾT / BẢO HÀNH =====
const constructionCommitment: CommitmentData = {
  title: "Chính sách bảo hành ",
  description:
    "FixHome cam kết mang đến dịch vụ xây dựng – sửa chữa nhà ở chất lượng, an toàn và đúng tiến độ.",
  image: baoHanh, 
  items: [
    "Khảo sát và tư vấn đúng nhu cầu thực tế.",
    "Báo giá minh bạch, không phát sinh chi phí.",
    "Bảo hành khắc phục, sửa chữa, thay thiết bị mới nếu bị hỏng ",
    "Đối với xây mới: 1 – 2 năm.",
    "Đối với sửa chữa: 6 – 24 tháng",
  ],
};

const ConstructionService: React.FC = () => {
  return (
    <ServiceLayout
      bannerImg={xayDung}
      subtitle="FixHome Services"
      title="Dịch Vụ Xây Dựng"
      description="Cung cấp các dịch vụ sửa chữa và xây dựng nhà ở chuyên nghiệp, phù hợp với mọi nhu cầu của gia đình."
      services={constructionServices}
    >
      <ServiceProcess steps={constructionProcess} />
      <ServiceCommitment data={constructionCommitment} />
    </ServiceLayout>
  );
};

export default ConstructionService;
