export interface PricingBenefit {
  id: number;
  title: string;
  description: string;
  icon: "shield" | "tag" | "list" | "check";
}

export const pricingBenefitsData: PricingBenefit[] = [
  {
    id: 1,
    title: "Minh bạch",
    description:
      "Công khai bảng giá theo hạng mục, giải thích rõ trước khi thi công.",
    icon: "shield",
  },
  {
    id: 2,
    title: "Đúng giá",
    description:
      "Thợ tuân thủ giá niêm yết; không tự ý cộng phụ phí.",
    icon: "tag",
  },
  {
    id: 3,
    title: "Rõ ràng",
    description:
      "Hạng mục, vật tư, bảo hành đều ghi nhận bằng biên nhận.",
    icon: "list",
  },
  {
    id: 4,
    title: "Không bày vẽ",
    description:
      "Không vẽ thêm hạng mục; chỉ sửa đúng phần cần thiết.",
    icon: "check",
  },
];
