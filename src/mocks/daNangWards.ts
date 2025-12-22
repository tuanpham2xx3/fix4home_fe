import { District } from "@/types/location";

export const daNangDistricts: District[] = [
  {
    code: "HC",
    name: "Hải Châu",
    wards: [
      { code: "HC-HCB", name: "Hòa Cường Bắc" },
      { code: "HC-HCN", name: "Hòa Cường Nam" },
      { code: "HC-HC", name: "Hải Châu" },
    ],
  },
  {
    code: "TK",
    name: "Thanh Khê",
    wards: [
      { code: "TK-TKT", name: "Thanh Khê Tây" },
      { code: "TK-TKD", name: "Thanh Khê Đông" },
    ],
  },
];
