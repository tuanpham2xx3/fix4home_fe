import FormInput from "./FormInput";
import { daNangDistricts } from "@/mocks/daNangWards";

interface Props {
  onSubmit: () => void;
  loading: boolean;
}

const BookingForm = ({ onSubmit, loading }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <FormInput
            label="Yêu cầu công việc"
            required
            placeholder="VD: Vệ sinh máy lạnh, sửa máy giặt..."
          />

          <FormInput label="Họ và tên" placeholder="Nguyễn Văn A" />

          <FormInput
            label="Số điện thoại"
            required
            placeholder="VD: 0915 269 839"
          />

          <FormInput label="Ngày làm" required type="date" />

          <FormInput
            label="Địa chỉ"
            required
            placeholder="Số nhà, tên đường"
          />

          {/* Giờ làm */}
          <div>
            <label className="block mb-1 text-sm font-medium text-dark">
              Giờ làm <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              min="07:00"
              max="17:00"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
            />
          </div>

          {/* Quận / Huyện */}
          <div>
            <label className="block mb-1 text-sm font-medium text-dark">
              Quận / Huyện <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition">
              <option value="">Chọn Phường / Xã</option>
              {daNangDistricts.map((district) => (
                <optgroup key={district.code} label={district.name}>
                  {district.wards.map((ward) => (
                    <option key={ward.code} value={ward.code}>
                      {ward.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Cần khảo sát trước */}
          <div className="flex items-center h-full pt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary"
              />
              <div className="text-sm">
                <p className="font-medium text-dark">Cần khảo sát trước</p>
                <p className="text-muted text-xs mt-0.5">
                  Áp dụng cho công việc cần xem hiện trạng
                </p>
              </div>
            </label>
          </div>

          {/* Ghi chú */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-dark">
              Ghi chú
            </label>
            <textarea
              rows={4}
              placeholder="VD: Mang thang cao, gọi trước khi đến..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm resize-none focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10 flex flex-col items-center">
          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 rounded-lg font-semibold text-dark bg-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Đang gửi..." : "Đặt Lịch"}
          </button>

          <p className="mt-4 text-xs text-red-600 text-center max-w-xl">
  (*) Thợ sẽ liên hệ từ 07h – 17h. Nếu đặt ngoài giờ, FixHome sẽ xác nhận vào thời điểm phù hợp.
          </p>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
