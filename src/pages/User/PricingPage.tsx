import React, { useRef, useState } from "react";
import {
  ShieldCheck,
  Tag,
  ListChecks,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

import { pricingBenefitsData } from "@/mocks/pricingBenefits";
import type { PricingBenefit } from "@/mocks/pricingBenefits";
import { pricingData } from "@/mocks/pricingData";

/* ===== ICON MAP ===== */
const benefitIcons: Record<
  PricingBenefit["icon"],
  React.FC<{ className?: string }>
> = {
  shield: ShieldCheck,
  tag: Tag,
  list: ListChecks,
  check: BadgeCheck,
};

const PricingPage: React.FC = () => {
  /* ===== refs để scroll ===== */
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>("xay-dung");


  const toggleAccordion = (key: string) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };
const handleMainServiceClick = (id: string) => {
  setActiveServiceId(id);
  scrollToSection(id);
};

  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingBenefitsData.map((item) => {
              const Icon = benefitIcons[item.icon];

              return (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="font-semibold text-green-700">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
           {/* ===== : DỊCH VỤ CHÍNH ===== */}
<div className="flex gap-3 overflow-x-auto lg:flex-col">
  {pricingData.map((service) => {
    const isActive = activeServiceId === service.id;

    return (
      <button
        key={service.id}
        onClick={() => handleMainServiceClick(service.id)}
        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-left transition
          ${
            isActive
              ? "bg-green-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-green-50"
          }
        `}
      >
        {/* Icon / Image */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <img
            src={service.image}
            alt={service.name}
            className="h-5 w-5 object-contain"
          />
        </div>

        {/* Text */}
        <span className="whitespace-nowrap text-sm font-medium">
          {service.name}
        </span>
      </button>
    );
  })}
</div>


            {/* ===== RIGHT: CÁC BẢNG GIÁ ===== */}
            <div className="space-y-10">
              {pricingData.map((service) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    sectionRefs.current[service.id] = el;
                  }}
                  className="rounded-xl border bg-white p-5"
                >
        
                  <h2 className="mb-4 border-l-4 border-green-600 pl-3 text-lg font-bold">
                    BẢNG GIÁ {service.name.toUpperCase()}
                  </h2>

                  {/* ===== DANH SÁCH DỊCH VỤ CON ===== */}
                  <div className="divide-y">
                    {service.subServices.map((sub) => {
                      const accordionKey = `${service.id}-${sub.id}`;
                      const isOpen = openAccordion === accordionKey;

                      return (
                        <div key={sub.id}>
                  
                          <button
                            onClick={() => toggleAccordion(accordionKey)}
                            className="flex w-full items-center justify-between py-3 text-left font-medium hover:bg-gray-50"
                          >
                            <span>{sub.name}</span>
                            <ChevronRight
                              className={`h-4 w-4 transition-transform ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {/* ===== BẢNG GIÁ CHI TIẾT ===== */}
                          {isOpen && (
                            <div className="pb-4">
                              <div className="mb-2 rounded bg-gray-100 px-3 py-2 text-sm font-semibold">
                                {sub.pricingTable.title}
                              </div>

                              <div className="overflow-x-auto">
                                <table className="w-full border text-sm">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      <th className="border px-3 py-2 text-left">
                                        Hạng mục
                                      </th>
                                      <th className="border px-3 py-2 text-left">
                                        Đơn giá (VND)
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {sub.pricingTable.items.map((item) => (
                                      <tr key={item.id}>
                                        <td className="border px-3 py-2">
                                          {item.name}
                                        </td>
                                        <td className="border px-3 py-2">
                                          {item.price}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
