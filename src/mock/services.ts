import {
  serviceBuild,
  serviceMechanic,
  serviceCooling,
  serviceElectric,
  serviceWater,
  serviceClean,
  serviceWood,
  serviceTransport,
  servicePrice,
  serviceApp,
  serviceNews,
} from "../assets/images";

export const services = [
  { icon: serviceBuild, title: "Xây Dựng", buttonText: "Chi tiết dịch vụ", link: "/services/build" },
  { icon: serviceMechanic, title: "Cơ Khí", buttonText: "Chi tiết dịch vụ", link: "/services/mechanic" },
  { icon: serviceCooling, title: "Điện Lạnh", buttonText: "Chi tiết dịch vụ", link: "/services/cooling" },
  { icon: serviceElectric, title: "Điện Máy", buttonText: "Chi tiết dịch vụ", link: "/services/electric" },
  { icon: serviceWater, title: "Điện Nước", buttonText: "Chi tiết dịch vụ", link: "/services/water" },
  { icon: serviceClean, title: "Vệ Sinh", buttonText: "Chi tiết dịch vụ", link: "/services/clean" },
  { icon: serviceWood, title: "Đồ Gỗ", buttonText: "Chi tiết dịch vụ", link: "/services/wood" },
  { icon: serviceTransport, title: "Vận Chuyển", buttonText: "Chi tiết dịch vụ", link: "/services/transport" },
  { icon: servicePrice, title: "Bảng Giá", buttonText: "Thông tin giá", link: "/pricing" },
  { icon: serviceApp, title: "Ứng Dụng", buttonText: "Giới thiệu app", link: "/app" },
  { icon: serviceNews, title: "Tin Tức", buttonText: "Trang tin tức", link: "/news" },
];
