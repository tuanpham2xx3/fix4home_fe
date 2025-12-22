import BookingStatusBadge from "./BookingStatusBadge";

interface Props {
  title: string;
  date: string;
  time: string;
  address: string;
  phone: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
}

const BookingCard = ({ title, date, time, address, phone, status }: Props) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-dark">{title}</h3>
          <p className="mt-1 text-sm text-muted">
            {date} • {time}
          </p>
        </div>

        <BookingStatusBadge status={status} />
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted">
        <p>📍 {address}</p>
        <p>📞 {phone}</p>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
        >
          Xem chi tiết
        </button>

        {status === "PENDING" && (
          <button
            type="button"
            className="rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Huỷ lịch
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
