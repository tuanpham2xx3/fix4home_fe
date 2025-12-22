interface Props {
  status: "PENDING" | "COMPLETED" | "CANCELLED";
}

const STATUS_MAP = {
  PENDING: {
    label: "Đang chờ",
    className: "bg-yellow-100 text-yellow-700",
  },
  COMPLETED: {
    label: "Hoàn thành",
    className: "bg-green-100 text-green-700",
  },
  CANCELLED: {
    label: "Đã huỷ",
    className: "bg-red-100 text-red-700",
  },
};

const BookingStatusBadge = ({ status }: Props) => {
  const s = STATUS_MAP[status];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${s.className}`}
    >
      {s.label}
    </span>
  );
};

export default BookingStatusBadge;
