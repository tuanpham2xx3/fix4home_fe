import { useNavigate } from "react-router-dom";

interface Props {
  onContinue: () => void;
}

const BookingSuccess = ({ onContinue }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-green-200 bg-white px-6 py-12 text-center">
      <div className="text-4xl">✅</div>

      <h3 className="mt-4 text-lg font-semibold text-dark">
        Đặt lịch thành công
      </h3>

      <p className="mt-2 text-sm text-muted">
        FixHome sẽ liên hệ xác nhận trong thời gian sớm nhất
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={() => navigate("/lich-hen")}
          className="rounded-lg bg-primary px-6 py-3 font-medium text-dark hover:brightness-95 transition"
        >
          Xem lịch hẹn
        </button>

        <button
          onClick={onContinue}
          className="rounded-lg border px-6 py-3 text-sm hover:bg-gray-50"
        >
          Đặt thêm dịch vụ
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
