export interface WorkflowStep {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Tiếp nhận thông tin",
    desc: "Bộ phận CSKH tiếp nhận yêu cầu từ khách hàng qua hotline hoặc Zalo.",
    image: "workflow1",
  },
  {
    id: 2,
    title: "Khảo sát & báo giá",
    desc: "Kỹ thuật viên đến khảo sát thực tế và gửi báo giá nhanh chóng.",
    image: "workflow2",
  },
  {
    id: 3,
    title: "Tiến hành thi công",
    desc: "Thực hiện công việc theo đúng tiến độ và tiêu chuẩn kỹ thuật.",
    image: "workflow3",
  },
  {
    id: 4,
    title: "Nghiệm thu & đánh giá",
    desc: "Khách hàng nghiệm thu và đánh giá chất lượng dịch vụ.",
    image: "workflow4",
  },
  {
    id: 5,
    title: "Bảo hành sau thi công",
    desc: "Cam kết bảo hành, hỗ trợ kỹ thuật sau khi hoàn thành công việc.",
    image: "workflow5",
  },
];
