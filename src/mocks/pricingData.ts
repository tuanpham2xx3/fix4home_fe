import {
  xayDungImg,
  coKhiImg,
  dienNuocImg,
  dienLanhImg,
  dienMayImg,
  doGoImg,
  veSinhImg,
  chuyenNhaImg,
  thongNghetImg,
} from "@/assets/images";

/* ================= INTERFACES ================= */

export interface PricingItem {
  id: string;
  name: string;
  price: string;
}

export interface PricingTable {
  id: string;
  title: string;
  items: PricingItem[];
}

export interface SubService {
  id: string;
  name: string;
  pricingTable: PricingTable;
}

export interface MainService {
  id: string;
  name: string;
  image: string; 
  subServices: SubService[];
}

/* ================= DATA ================= */

export const pricingData: MainService[] = [
  /* ================= XÂY DỰNG ================= */
  {
    id: "xay-dung",
    name: "Xây dựng",
    image: xayDungImg,
    subServices: [
      {
        id: "sua-nha",
        name: "Sửa nhà",
        pricingTable: {
          id: "bg-sua-nha",
          title: "BẢNG GIÁ DỊCH VỤ SỬA NHÀ",
          items: [
            { id: "1", name: "Sửa tường, nứt, thấm", price: "200.000 - 500.000" },
            { id: "2", name: "Cải tạo nhà ở", price: "3.000.000+" },
          ],
        },
      },
      {
        id: "op-lat",
        name: "Ốp lát",
        pricingTable: {
          id: "bg-op-lat",
          title: "BẢNG GIÁ DỊCH VỤ ỐP LÁT",
          items: [
            { id: "1", name: "Ốp gạch nền", price: "120.000 - 200.000/m²" },
            { id: "2", name: "Ốp gạch tường", price: "150.000 - 250.000/m²" },
          ],
        },
      },
      {
        id: "son-tuong",
        name: "Sơn tường",
        pricingTable: {
          id: "bg-son-tuong",
          title: "BẢNG GIÁ DỊCH VỤ SƠN TƯỜNG",
          items: [
            { id: "1", name: "Sơn nội thất", price: "30.000 - 50.000/m²" },
            { id: "2", name: "Sơn ngoại thất", price: "40.000 - 70.000/m²" },
          ],
        },
      },
      {
        id: "tran-thach-cao",
        name: "Trần thạch cao",
        pricingTable: {
          id: "bg-tran-thach-cao",
          title: "BẢNG GIÁ TRẦN THẠCH CAO",
          items: [
            { id: "1", name: "Trần phẳng", price: "160.000 - 220.000/m²" },
            { id: "2", name: "Trần giật cấp", price: "220.000 - 350.000/m²" },
          ],
        },
      },
    ],
  },

  /* ================= CƠ KHÍ ================= */
  {
    id: "co-khi",
    name: "Cơ Khí",
    image: coKhiImg,
    subServices: [
      {
        id: "cua-sat",
        name: "Cửa sắt",
        pricingTable: {
          id: "bg-cua-sat",
          title: "BẢNG GIÁ DỊCH VỤ CỬA SẮT",
          items: [
            { id: "1", name: "Sửa cửa sắt", price: "300.000 - 700.000" },
          ],
        },
      },
      {
        id: "cong-nhom",
        name: "Cổng nhôm",
        pricingTable: {
          id: "bg-cong-nhom",
          title: "BẢNG GIÁ DỊCH VỤ CỔNG NHÔM",
          items: [
            { id: "1", name: "Sửa cổng nhôm", price: "400.000 - 800.000" },
          ],
        },
      },
      {
        id: "han-xi",
        name: "Hàn xì",
        pricingTable: {
          id: "bg-han-xi",
          title: "BẢNG GIÁ DỊCH VỤ HÀN XÌ",
          items: [
            { id: "1", name: "Hàn sắt / inox", price: "200.000 - 600.000" },
          ],
        },
      },
    ],
  },

  /* ================= ĐIỆN NƯỚC ================= */
  {
    id: "dien-nuoc",
    name: "Điện Nước",
    image: dienNuocImg,
    subServices: [
      {
        id: "sua-dien",
        name: "Sửa điện",
        pricingTable: {
          id: "bg-sua-dien",
          title: "BẢNG GIÁ SỬA ĐIỆN",
          items: [
            { id: "1", name: "Sửa ổ cắm, công tắc", price: "150.000 - 300.000" },
          ],
        },
      },
      {
        id: "sua-ong-nuoc",
        name: "Sửa ống nước",
        pricingTable: {
          id: "bg-sua-ong-nuoc",
          title: "BẢNG GIÁ SỬA ỐNG NƯỚC",
          items: [
            { id: "1", name: "Sửa rò rỉ nước", price: "200.000 - 400.000" },
          ],
        },
      },
      {
        id: "lap-dat",
        name: "Lắp đặt thiết bị",
        pricingTable: {
          id: "bg-lap-dat",
          title: "BẢNG GIÁ LẮP ĐẶT THIẾT BỊ",
          items: [
            { id: "1", name: "Lắp thiết bị điện nước", price: "300.000+" },
          ],
        },
      },
    ],
  },

  /* ================= ĐIỆN LẠNH ================= */
  {
    id: "dien-lanh",
    name: "Điện Lạnh",
    image: dienLanhImg,
    subServices: [
      {
        id: "sua-dieu-hoa",
        name: "Sửa điều hòa",
        pricingTable: {
          id: "bg-sua-dieu-hoa",
          title: "BẢNG GIÁ SỬA ĐIỀU HÒA",
          items: [
            { id: "1", name: "Nạp gas, vệ sinh", price: "300.000 - 600.000" },
          ],
        },
      },
      {
        id: "tu-lanh",
        name: "Bảo dưỡng tủ lạnh",
        pricingTable: {
          id: "bg-tu-lanh",
          title: "BẢNG GIÁ TỦ LẠNH",
          items: [
            { id: "1", name: "Vệ sinh, kiểm tra", price: "200.000 - 400.000" },
          ],
        },
      },
      {
        id: "may-lanh-cong-nghiep",
        name: "Máy lạnh công nghiệp",
        pricingTable: {
          id: "bg-may-lanh-cn",
          title: "BẢNG GIÁ MÁY LẠNH CÔNG NGHIỆP",
          items: [
            { id: "1", name: "Bảo trì định kỳ", price: "1.000.000+" },
          ],
        },
      },
    ],
  },

  /* ================= ĐIỆN MÁY ================= */
  {
    id: "dien-may",
    name: "Điện Máy",
    image: dienMayImg,
    subServices: [
      {
        id: "may-giat",
        name: "Sửa máy giặt",
        pricingTable: {
          id: "bg-may-giat",
          title: "BẢNG GIÁ SỬA MÁY GIẶT",
          items: [
            { id: "1", name: "Sửa không vắt", price: "300.000 - 600.000" },
          ],
        },
      },
      {
        id: "may-nuoc-nong",
        name: "Sửa máy nước nóng",
        pricingTable: {
          id: "bg-may-nuoc-nong",
          title: "BẢNG GIÁ MÁY NƯỚC NÓNG",
          items: [
            { id: "1", name: "Thay thanh đốt", price: "400.000 - 700.000" },
          ],
        },
      },
      {
        id: "bep-lo",
        name: "Bếp điện – lò vi sóng",
        pricingTable: {
          id: "bg-bep-lo",
          title: "BẢNG GIÁ BẾP – LÒ",
          items: [
            { id: "1", name: "Sửa bếp / lò", price: "300.000+" },
          ],
        },
      },
    ],
  },

  /* ================= ĐỒ GỖ ================= */
  {
    id: "do-go",
    name: "Đồ Gỗ",
    image: doGoImg,
    subServices: [
      {
        id: "sua-tu",
        name: "Sửa tủ",
        pricingTable: {
          id: "bg-sua-tu",
          title: "BẢNG GIÁ SỬA TỦ",
          items: [{ id: "1", name: "Sửa bản lề", price: "200.000 - 400.000" }],
        },
      },
      {
        id: "sua-ban-ghe",
        name: "Sửa bàn ghế",
        pricingTable: {
          id: "bg-sua-ban-ghe",
          title: "BẢNG GIÁ SỬA BÀN GHẾ",
          items: [{ id: "1", name: "Gia cố bàn ghế", price: "300.000+" }],
        },
      },
      {
        id: "noi-that",
        name: "Lắp ráp nội thất",
        pricingTable: {
          id: "bg-noi-that",
          title: "BẢNG GIÁ NỘI THẤT",
          items: [{ id: "1", name: "Lắp ráp nội thất", price: "500.000+" }],
        },
      },
    ],
  },

  /* ================= VỆ SINH ================= */
  {
    id: "ve-sinh",
    name: "Vệ Sinh",
    image: veSinhImg,
    subServices: [
      {
        id: "nha",
        name: "Vệ sinh nhà cửa",
        pricingTable: {
          id: "bg-ve-sinh-nha",
          title: "BẢNG GIÁ VỆ SINH NHÀ",
          items: [{ id: "1", name: "Theo giờ", price: "60.000 - 80.000/giờ" }],
        },
      },
      {
        id: "sofa",
        name: "Giặt sofa",
        pricingTable: {
          id: "bg-giat-sofa",
          title: "BẢNG GIÁ GIẶT SOFA",
          items: [{ id: "1", name: "Giặt sofa", price: "400.000 - 800.000" }],
        },
      },
      {
        id: "cong-trinh",
        name: "Tổng vệ sinh công trình",
        pricingTable: {
          id: "bg-ve-sinh-cong-trinh",
          title: "BẢNG GIÁ VỆ SINH CÔNG TRÌNH",
          items: [{ id: "1", name: "Sau xây dựng", price: "1.500.000+" }],
        },
      },
    ],
  },

  /* ================= CHUYỂN NHÀ ================= */
  {
    id: "chuyen-nha",
    name: "Chuyển Nhà",
    image: chuyenNhaImg,
    subServices: [
      {
        id: "chuyen-do",
        name: "Chuyển đồ",
        pricingTable: {
          id: "bg-chuyen-do",
          title: "BẢNG GIÁ CHUYỂN ĐỒ",
          items: [{ id: "1", name: "Chuyển trọn gói", price: "1.000.000+" }],
        },
      },
      {
        id: "don-dep",
        name: "Dọn dẹp sau chuyển",
        pricingTable: {
          id: "bg-don-dep",
          title: "BẢNG GIÁ DỌN DẸP",
          items: [{ id: "1", name: "Dọn vệ sinh", price: "500.000+" }],
        },
      },
    ],
  },

  /* ================= THÔNG NGHẸT ================= */
  {
    id: "thong-nghet",
    name: "Thông Nghẹt",
    image: thongNghetImg,
    subServices: [
      {
        id: "thong-cong",
        name: "Thông cống",
        pricingTable: {
          id: "bg-thong-cong",
          title: "BẢNG GIÁ THÔNG CỐNG",
          items: [{ id: "1", name: "Thông cống nghẹt", price: "300.000 - 600.000" }],
        },
      },
      {
        id: "thong-bon-cau",
        name: "Thông bồn cầu",
        pricingTable: {
          id: "bg-thong-bon-cau",
          title: "BẢNG GIÁ THÔNG BỒN CẦU",
          items: [{ id: "1", name: "Thông bồn cầu", price: "250.000 - 500.000" }],
        },
      },
    ],
  },
];
