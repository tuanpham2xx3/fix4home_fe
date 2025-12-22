import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "@/components/booking/BookingForm";
import BookingSuccess from "@/components/booking/BookingSuccess";

const BookingPage = () => {
const [loading, setLoading] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light font-sans">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header + Action */}
        <div
          className="
            mb-10 flex flex-col gap-4
            md:flex-row md:items-center md:justify-between
          "
        >
          <div className="text-center md:text-left">
            <h1 className="font-heading text-2xl md:text-3xl font-semibold text-secondary">
              Đặt Lịch Dịch Vụ
            </h1>
            <div className="mt-3 h-1 w-20 bg-primary rounded-full mx-auto md:mx-0" />
            <p className="mt-4 text-muted text-sm md:text-base">
              Vui lòng điền thông tin để FixHome hỗ trợ nhanh nhất
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/lich-hen")}
            className="
              flex items-center justify-center gap-2
              rounded-lg border border-secondary
              px-5 py-2.5 text-sm font-medium text-secondary
              hover:bg-secondary hover:text-white
              transition
            "
          >
            📅 Lịch hẹn của tôi
          </button>
        </div>

        {/* Content */}
        {!isSuccess ? (
          <BookingForm
  loading={loading}
  onSubmit={() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 800);
  }}
/>
        ) : (
          <BookingSuccess onContinue={() => setIsSuccess(false)} />
        )}
      </div>
    </div>
  );
};

export default BookingPage;
