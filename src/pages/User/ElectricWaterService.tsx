import React from "react";
import ServiceLayout from "../../components/ServiceLayout";
import { serviceElectricWater, camket } from "../../assets/images"; 
import ServiceProcess from "@/components/ServiceProcess";
import { ProcessStep } from "@/types/process";
import { CommitmentData } from "@/types/commitment";
import ServiceCommitment from "@/components/ServiceCommitment";

const ElectricWaterService: React.FC = () => {
   const electricWaterServices = [
    { number: 1, name: "Sửa đường điện", path: "/diennuoc/sua-dien" },
    { number: 2, name: "Sửa ống nước", path: "/diennuoc/sua-ong-nuoc" },
    { number: 3, name: "Lắp đặt thiết bị", path: "/diennuoc/lap-dat"},

  ];
    
  const electricWaterProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tiếp nhận sự cố điện / nước",
    headerColor: "bg-blue-100",
    items: [
      "Khách hàng mô tả sự cố gặp phải",
      "Xác định mức độ khẩn cấp",
    ],
  },
  {
    step: 2,
    title: "Tư vấn & báo giá",
    headerColor: "bg-purple-100",
    items: [
      "Nhân viên FixHome liên hệ tư vấn",
      "Đưa ra phương án xử lý và báo giá",
    ],
  },
  {
    step: 3,
    title: "Điều phối kỹ thuật viên",
    headerColor: "bg-green-100",
    items: [
      "Chọn kỹ thuật viên phù hợp",
      "Xác nhận thời gian làm việc",
    ],
  },
  {
    step: 4,
    title: "Thực hiện sửa chữa",
    headerColor: "bg-yellow-100",
    items: [
      "Kỹ thuật viên đến đúng hẹn",
      "Tiến hành sửa chữa theo quy trình",
    ],
  },
  {
    step: 5,
    title: "Nghiệm thu & thanh toán",
    headerColor: "bg-cyan-100",
    items: [
      "Khách hàng kiểm tra kết quả",
      "Xác nhận hoàn thành dịch vụ",
    ],
  },
];


const electricWaterCommitment: CommitmentData = {
  title: "Cam Kết Của FixHome",
  description:
    "FixHome cam kết cung cấp dịch vụ sửa chữa điện – nước minh bạch, an toàn và bền vững cho mọi gia đình.",
  image: camket,
  items: [
    "Hợp đồng và báo giá rõ ràng, không phát sinh chi phí ngoài thỏa thuận.",
    "Thi công đúng yêu cầu kỹ thuật và tiêu chuẩn an toàn.",
    "Đảm bảo đúng tiến độ đã cam kết với khách hàng.",
    "Vật tư sử dụng đúng như báo giá đã thống nhất.",
    "Không gây hư hại tài sản trong quá trình thi công.",
    "Có chính sách bảo hành rõ ràng sau khi hoàn thành.",
  ],
};


  return (
    <ServiceLayout
      bannerImg={serviceElectricWater}
      title="THỢ ĐIỆN NƯỚC – DỊCH VỤ ĐIỆN NƯỚC"
      subtitle="Professional – Reliable – Dedicated"
      description="Với phương châm “Khách hàng là trên hết”, FIXHOME luôn chú trọng đến chất lượng dịch vụ và tính chuyên nghiệp của mình. Các thợ sửa điện nước của công ty được đào tạo bài bản về các kỹ năng cần thiết để đảm bảo sự an toàn và độ tin cậy trong quá trình sửa chữa. Đồng thời, FIXHOME cũng cung cấp cho các thợ các dụng cụ và trang thiết bị hiện đại nhất. Giúp thợ hoàn thành công việc một cách nhanh chóng và hiệu quả."
      services={electricWaterServices}
  >
        <ServiceProcess steps={electricWaterProcess} />
         <ServiceCommitment data={electricWaterCommitment} />
        </ServiceLayout>
  );
};

export default ElectricWaterService;
