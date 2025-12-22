import { useState } from "react";
import "../../assets/styles/home.css";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../mocks/services";
import {
  about,
  featureBg,
  featureFast,
  featureFlexible,
  featureSafe,
  featureTransparent,
  workflow1,
  workflow2,
  workflow3,
  workflow4,
  workflow5,
  appPromo,
} from "../../assets/images/";
import { workflowSteps } from "../../mocks/workflow";
import { faqData } from "../../mocks/faq";
import WorkflowItem from "../../components/WorkflowItem";

const imageMap: Record<string, string> = {
  workflow1,
  workflow2,
  workflow3,
  workflow4,
  workflow5,
};

const Home = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentImage =
    imageMap[
      workflowSteps.find((s) => s.id === activeStep)?.image || "workflow1"
    ];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <main className="bg-light">
      {/* Hero Section */}
      <section className="bg-light py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="font-sans text-gray-700 mb-2">
              FixHome – thợ của mọi nhà
            </p>
            <h1 className="font-heading text-4xl text-secondary font-bold">
              CÔNG TY TNHH DỊCH VỤ KỸ THUẬT FIXHOME
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              ĐIỆN LẠNH - VỆ SINH - ĐỒ GỖ
            </h2>

            <ul className="grid grid-cols-2 gap-y-2 text-dark text-sm mb-8">
              <li>• Khảo sát báo giá miễn phí</li>
              <li>• Hơn 14 năm thành lập</li>
              <li>• Thợ có chứng chỉ an toàn</li>
              <li>• Cung cấp hàng trăm dịch vụ</li>
            </ul>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-secondary text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#184d25] transition">
                GỌI: 1800.8122
              </button>
              <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-md font-semibold hover:bg-secondary hover:text-white transition">
                TƯ VẤN QUA ZALO
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 relative flex justify-center overflow-hidden">
      <img
        src="https://thoviet.com.vn/wp-content/uploads/2025/09/tho-viet-new.png"
        alt="FixHome Hero"
        className="relative z-0 w-[90%] md:w-[80%] h-auto object-contain"
      />

      <img
        src="https://thoviet.com.vn/wp-content/uploads/2025/09/Co-mat-dung.png"
        alt="Có mặt nhanh chóng"
        className="absolute z-10 w-[25%] left-0 top-[15%] -translate-x-1/2 animate-float"
      />

      <img
        src="https://thoviet.com.vn/wp-content/uploads/2025/09/14.png"
        alt="Biểu đồ dịch vụ"
        className="absolute z-10 w-[20%] right-0 top-0 translate-x-1/3 animate-float delay-100"
      />

      <img
        src="https://thoviet.com.vn/wp-content/uploads/2025/09/20.png"
        alt="200+ thợ sửa chữa"
        className="absolute z-10 w-[60%] bottom-0 left-1/2 -translate-x-1/2 animate-float delay-200"
      />
    </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 items-center">
          <div>
            <img
              src={about}
              alt="Giới thiệu FixHome"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading text-secondary font-extrabold mb-3">
              DÂN DỤNG & CÔNG NGHIỆP
            </h2>
            <p className="text-lg font-heading text-dark mb-6">
              SỬA NHÀ – CƠ KHÍ – ĐIỆN NƯỚC – ĐIỆN LẠNH – ĐỒ GỖ
            </p>

            <h3 className="text-xl font-bold text-secondary mb-3">
              VỀ CHÚNG TÔI
            </h3>
            <p className="text-muted leading-relaxed mb-3">
              <strong>FixHome</strong> là đơn vị dịch vụ kỹ thuật{" "}
              <strong>Thi Công – Lắp Đặt – Bảo Trì – Sửa Chữa</strong> với hàng
              trăm dịch vụ: Xây Dựng, Cơ Khí, Điện Nước, Điện Lạnh, Đồ Gỗ, Vệ
              Sinh, Chuyển Nhà, v.v... phục vụ cho hộ gia đình và doanh nghiệp.
            </p>
            <p className="text-muted leading-relaxed">
              Ngoài ra, FixHome còn tiên phong ứng dụng công nghệ qua nền tảng{" "}
              <strong>“Đặt Thợ Nhanh”</strong> – giúp khách hàng đặt lịch sửa
              chữa, bảo trì dễ dàng và nhanh chóng.
            </p>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tiêu đề */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-10">
            An tâm với lựa chọn của bạn
          </h2>

          {/* Ảnh minh họa */}
          <div className="w-full mb-12">
            <img
              src={featureBg}
              alt="Khách hàng FixHome"
              className="w-full rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Các box lợi ích */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: featureFast,
                title: "Đặt lịch nhanh",
                desc: "Thao tác đặt lịch dịch vụ đơn giản chỉ từ 60 giây.",
              },
              {
                icon: featureFlexible,
                title: "Tiện lợi, linh hoạt",
                desc: "Chủ động chọn các dịch vụ từ dân dụng đến công nghiệp.",
              },
              {
                icon: featureSafe,
                title: "An tâm, thoải mái",
                desc: "Người làm chuyên nghiệp, lý lịch rõ ràng và được công ty giám sát.",
              },
              {
                icon: featureTransparent,
                title: "Giá cả minh bạch",
                desc: "Giá công khai trên Web/App, tư vấn và khảo sát miễn phí trước khi làm.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border border-gray-100"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-12 w-12 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-10">
            DỊCH VỤ CỦA FIXHOME
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      |{/* quy trinh cac buoc*/}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-heading text-secondary mb-10">
          QUY TRÌNH THI CÔNG CỦA FIXHOME
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={currentImage}
              alt="Quy trình thi công"
              className="rounded-xl shadow-md max-w-full h-auto transition-all duration-500 ease-in-out"
            />
          </div>

          <div>
            {workflowSteps.map((step) => (
              <WorkflowItem
                key={step.id}
                step={step}
                isActive={step.id === activeStep}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>
        </div>
      </section>
      {/*map */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-secondary mb-6 uppercase">
            Khu Vực Thợ Đang Hoạt Động
          </h2>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Bản đồ khu vực hoạt động FixHome"
              src="https://cskh.thoviet.com/map-tv585682011"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      {/* ====== NHỮNG LO NGẠI KHI GỌI THỢ BÊN NGOÀI ====== */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-secondary mb-10 uppercase">
            Những Lo Ngại Khi Gọi Thợ Bên Ngoài
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "Nhân viên không có lí lịch rõ ràng, không an toàn",
                desc: "Việc không biết rõ lý lịch của thợ sửa chữa là một mối lo ngại lớn, đặc biệt khi họ cần vào nhà hoặc nơi làm việc của bạn.",
              },
              {
                id: "02",
                title: "Làm xong nhưng khi bảo hành thì gọi không đến.",
                desc: "Nhiều trường hợp sau khi sửa xong, nhưng không có thông tin rõ ràng, khiến khách hàng không thể liên hệ lại khi có sự cố.",
              },
              {
                id: "03",
                title:
                  "Bất tiện, phải lưu nhiều số điện thoại của các đơn vị sửa chữa.",
                desc: "Việc lưu quá nhiều số điện thoại của từng nhóm thợ khác nhau gây rối và bất tiện khi cần liên hệ gấp.",
              },
              {
                id: "04",
                title: "Phải trả phí nếu tới nơi mà khách không làm.",
                desc: "Một số đơn vị thu phí nếu đến nơi mà khách không sử dụng dịch vụ, gây khó chịu cho khách hàng.",
              },
              {
                id: "05",
                title: "Khó khăn trong việc khiếu nại và hoàn tiền.",
                desc: "Nếu dịch vụ không đạt chất lượng, khách hàng gặp khó khăn khi muốn khiếu nại hoặc yêu cầu hoàn tiền.",
              },
              {
                id: "06",
                title: "Không đảm bảo chất lượng, tay nghề thợ.",
                desc: "Không có cam kết về tay nghề, thợ có thể làm ẩu hoặc gây hư hại thêm cho thiết bị.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <h3 className="text-4xl font-bold text-secondary">
                    {item.id}
                  </h3>
                  <div>
                    <p className="font-semibold text-dark mb-2">{item.title}</p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ====== CÂU HỎI THƯỜNG GẶP ====== */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-secondary mb-10 uppercase">
            Câu Hỏi Thường Gặp
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-4">
            {faqData.map((item) => (
              <WorkflowItem
                key={item.id}
                step={item}
                isActive={activeFaq === item.id}
                onClick={() =>
                  setActiveFaq(activeFaq === item.id ? null : item.id)
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-secondary mb-10 uppercase">
            App FIXHOME - Đặt Thợ Nhanh
          </h2>

          <img
            src={appPromo}
            alt="App Thợ Việt - Đặt Thợ Nhanh"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
