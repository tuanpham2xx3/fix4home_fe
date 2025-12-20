export interface SubMenuItem {
  name: string;
  path: string;
}

export interface MenuItem {
  name: string;
  path?: string;
  subItems?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Trang Chủ",
    path: "/",
  },
  {
    name: "Xây Dựng",
    path: "/xaydung",
    subItems: [
      { name: "Sửa nhà", path: "/xaydung/sua-nha" },
      { name: "Ốp lát", path: "/xaydung/op-lat" },
      { name: "Sơn tường", path: "/xaydung/son-tuong" },
      { name: "Trần thạch cao", path: "/xaydung/tran-thach-cao" },
    ],
  },
  {
    name: "Cơ Khí",
    path: "/cokhi",
    subItems: [
      { name: "Cửa sắt", path: "/cokhi/cua-sat" },
      { name: "Cổng nhôm", path: "/cokhi/cong-nhom" },
      { name: "Hàn xì", path: "/cokhi/han-xi" },
    ],
  },
  {
    name: "Điện Nước",
    path: "/diennuoc",
    subItems: [
      { name: "Sửa điện", path: "/diennuoc/sua-dien" },
      { name: "Sửa ống nước", path: "/diennuoc/sua-ong-nuoc" },
      { name: "Lắp đặt thiết bị", path: "/diennuoc/lap-dat" },
    ],
  },
  {
    name: "Điện Lạnh",
    path: "/dienlanh",
    subItems: [
      { name: "Sửa điều hòa", path: "/dienlanh/sua-dieu-hoa" },
      { name: "Bảo dưỡng tủ lạnh", path: "/dienlanh/tu-lanh" },
      { name: "Máy lạnh công nghiệp", path: "/dienlanh/may-lanh-cong-nghiep" },
    ],
  },
  {
    name: "Điện Máy",
    path: "/dienmay",
    subItems: [
      { name: "Sửa máy giặt", path: "/dienmay/may-giat" },
      { name: "Sửa máy nước nóng", path: "/dienmay/may-nuoc-nong" },
      { name: "Bếp điện – lò vi sóng", path: "/dienmay/bep-lo" },
    ],
  },
  {
    name: "Đồ Gỗ",
    path: "/dogo",
    subItems: [
      { name: "Sửa tủ", path: "/dogo/sua-tu" },
      { name: "Sửa bàn ghế", path: "/dogo/sua-ban-ghe" },
      { name: "Lắp ráp nội thất", path: "/dogo/noi-that" },
    ],
  },
  {
    name: "Vệ Sinh",
    path: "/vesinh",
    subItems: [
      { name: "Vệ sinh nhà cửa", path: "/vesinh/nha" },
      { name: "Giặt sofa", path: "/vesinh/sofa" },
      { name: "Tổng vệ sinh công trình", path: "/vesinh/cong-trinh" },
    ],
  },
  {
    name: "Chuyển Nhà",
    path: "/chuyen-nha",
    subItems: [
      { name: "Chuyển đồ", path: "/chuyen-nha/chuyen-do" },
      { name: "Dọn dẹp sau chuyển", path: "/chuyen-nha/don-dep" },
    ],
  },
  {
    name: "Thông Nghẹt",
    path: "/thong-nghet",
    subItems: [
      { name: "Thông cống", path: "/thong-nghet/thong-cong" },
      { name: "Thông bồn cầu", path: "/thong-nghet/thong-bon-cau" },
    ],
  },
  {
    name: "Ứng Dụng",
    path: "/ung-dung",
  },
  {
    name: "Bảng Giá",
    path: "/bang-gia",
  },
  {
    name: "Tin Tức",
    path: "/tin-tuc",
  },
  {
    name: "Liên hệ",
    path: "/lien-he",
  },
];
