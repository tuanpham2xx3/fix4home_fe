import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* ===== TITLE ===== */}
          <div className="mb-12 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              LIÊN HỆ FIXHOME
            </h1>
            <p className="mt-2 text-gray-600">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>

          {/* ===== CONTENT ===== */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            {/* ===== LEFT: CONTACT INFO ===== */}
            <div className="mx-[100px] space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-3 text-green-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Địa chỉ
                  </h4>
                  <p className="text-sm text-gray-600">
                    123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-3 text-green-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Hotline
                  </h4>
                  <p className="text-sm text-gray-600">
                    1900 9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-3 text-green-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Email
                  </h4>
                  <p className="text-sm text-gray-600">
                    support@fixhome.vn
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-3 text-green-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Thời gian làm việc
                  </h4>
                  <p className="text-sm text-gray-600">
                    Thứ 2 – Chủ nhật: 07:00 – 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* ===== RIGHT: CONTACT FORM ===== */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-lg font-semibold text-gray-800">
                Gửi yêu cầu hỗ trợ
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    className="w-full rounded-lg border px-4 py-2 text-sm focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full rounded-lg border px-4 py-2 text-sm focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nội dung
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Nhập nội dung cần hỗ trợ"
                    className="w-full rounded-lg border px-4 py-2 text-sm focus:border-green-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-600 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Gửi liên hệ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
