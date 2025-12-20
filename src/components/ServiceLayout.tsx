import React from "react";
import { Link } from "react-router-dom";
import { qc } from "@/assets/images";



interface ServiceLayoutProps {
  bannerImg: string;
  title: string;
  subtitle?: string;
  description?: string;
  services: { number: number; name: string; path: string }[];
  children?: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  bannerImg,
  title,
  subtitle,
  description,
  services,
  children,
}) => {
  return (
    <main className="bg-white text-dark">
      {/*  SECTION 1 - BANNER GIỚI THIỆU */}
      <section className="w-full">
       <div className="w-full min-h-[420px] md:min-h-[520px] bg-dark flex items-center justify-center">
          <img
            src={bannerImg}
            alt={title}
       className="w-full h-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 py-10">
          {subtitle && (
            <h2 className="text-secondary text-lg md:text-xl font-semibold uppercase tracking-wide mb-2">
              {subtitle}
            </h2>
          )}

          <h1 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </section>

      {/* SECTION 2 - DANH SÁCH DỊCH VỤ CON */}
      <section className="py-12 bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-dark mb-8">
            Các Dịch Vụ Của Chúng Tôi
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex items-center"
              >
                <span className="text-2xl font-extrabold text-primary mr-4">
                  {service.number < 10 ? `0${service.number}` : service.number}
                </span>

                <span className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

          {/* SECTION 3 – NỘI DUNG QUY TRÌNH */}
      {children}

      {/* SECTION 4 – PROMO BANNER CUỐI TRANG */}
<section className="relative w-full h-[280px] md:h-[360px] mt-20">
  {/* IMAGE */}
  <img
     src={qc}
    alt="FixHome Service Promotion"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />

  {/* CONTENT */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
    <div className="max-w-3xl text-white">
      <h2 className="text-2xl text-primary md:text-4xl font-extrabold mb-4">
        FixHome – Giải Pháp Sửa Chữa Toàn Diện Cho Mọi Gia Đình
      </h2>
      <p className="text-base md:text-lg opacity-90">
        Đội ngũ kỹ thuật viên chuyên nghiệp, quy trình rõ ràng,
        cam kết chất lượng và bảo hành minh bạch.
      </p>
    </div>
  </div>
</section>

    </main>
  );
};

export default ServiceLayout;
