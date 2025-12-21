import React, { useState } from "react";
import { ungDung2 , ungDungStep1,
  ungDungStep2,
  ungDungStep3,
  ungDungStep4,
  ungDungStep5,} from "@/assets/images";
import { reviewsData } from "@/mocks/reviews";
import type { Review } from "@/mocks/reviews";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex items-center gap-1">
      <span className="mr-2 font-semibold text-gray-800">
        {rating.toFixed(1)}
      </span>

      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${
            index < fullStars ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.245 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
};


const AppIntroPage: React.FC = () => {
const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Bước 1/5 – Vào trang chủ",
      desc: "Tìm dịch vụ bạn cần",
      image: ungDungStep1,
    },
    {
      title: "Bước 2/5 – Tìm kiếm chi tiết",
      desc: "Chọn đúng danh mục dịch vụ",
      image: ungDungStep2,
    },
    {
      title: "Bước 3/5 – Điền thông tin",
      desc: "Nhập họ tên, số điện thoại, địa chỉ",
      image: ungDungStep3,
    },
    {
      title: "Bước 4/5 – Xác nhận OTP",
      desc: "Chờ tin nhắn mã OTP để xác thực",
      image: ungDungStep4,
    },
    {
      title: "Bước 5/5 – Hoàn tất đặt lịch",
      desc: "Hệ thống báo đặt lịch thành công",
      image: ungDungStep5,
    },
];

  return (
    <main>
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="mb-14 text-center text-2xl font-bold fade-in-up">
          CHỈ CÓ TẠI{" "}
          <span className="relative text-green-600">
            APP THỢ VIỆT
            <span className="absolute left-0 bottom-0 h-2 w-full bg-yellow-300 -z-10"></span>
          </span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-5 fade-in-up">
            {/* Item 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-green-700">
                1. GIẢM 50.000 VND
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Khi đặt lịch điện lạnh và điện máy: máy lạnh, máy giặt, tủ
                lạnh,...
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-green-700">2. GIẢM 10%</h4>
              <p className="mt-1 text-sm text-gray-600">
                Phí nhân công đặt lịch xây dựng, cơ khí, điện nước
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-green-700">3. TÍCH ĐIỂM</h4>
              <p className="mt-1 text-sm text-gray-600">
                Tích điểm thành viên bạc, vàng, kim cương,...
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-green-700">4. THEO DÕI LỊCH</h4>
              <p className="mt-1 text-sm text-gray-600">
                Trạng thái, lịch sử công việc và bảo hành, hậu mãi
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-green-700">
                5. ĐẶT LỊCH NHANH
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Chỉ với 30 giây và chưa đến 6 bước thao tác
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={ungDung2}
              alt="FixHome App"
              className="w-full h-full object-contain animate-float delay-100"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            {/* LEFT – PHONE */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] rounded-[36px] border-[6px] border-black bg-black shadow-xl overflow-hidden animate-float">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[22px] bg-black rounded-b-xl z-10"></div>

                {/* Screen */}
                <div className="w-full h-full bg-white overflow-hidden">
                  <ul
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentStep * 100}%)`,
                    }}
                  >
                    {steps.map((step, index) => (
                      <li
                        key={index}
                        className="w-full h-full flex-shrink-0"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT – STEP INFO + CONTROL */}
            <div className="space-y-6">
              <span className="text-sm font-semibold text-gray-400">
                QUY TRÌNH ĐẶT LỊCH
              </span>

              <h3 className="text-xl font-bold">
                {steps[currentStep].title}
              </h3>

              <p className="text-gray-600">
                {steps[currentStep].desc}
              </p>

              {/* Step buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setCurrentStep((prev) => Math.max(prev - 1, 0))
                  }
                  className="text-sm text-gray-400 hover:text-green-600"
                >
                  TRƯỚC
                </button>

                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold
                      ${
                        currentStep === index
                          ? "bg-green-700 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentStep((prev) =>
                      Math.min(prev + 1, steps.length - 1)
                    )
                  }
                  className="text-sm font-semibold text-green-700"
                >
                  TIẾP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="mb-14 text-center text-2xl font-bold">
      ĐÁNH GIÁ KHÁCH HÀNG
    </h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {reviewsData.map((review: Review) => (
        <div
          key={review.id}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          {/* Comment */}
          <p className="mb-6 text-gray-700 leading-relaxed">
            {review.comment}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-4">
            {/* User info */}
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {review.name}
                </p>
                <p className="text-xs text-gray-500">
                  {review.address}
                </p>
              </div>
            </div>

            {/* Rating */}
            {renderStars(review.rating)}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
};

export default AppIntroPage;
