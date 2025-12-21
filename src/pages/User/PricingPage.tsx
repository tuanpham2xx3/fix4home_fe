import React from "react";
import {
  ShieldCheck,
  Tag,
  ListChecks,
  BadgeCheck,
} from "lucide-react";

import { pricingBenefitsData } from "@/mocks/pricingBenefits";
import type { PricingBenefit } from "@/mocks/pricingBenefits";

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
  return (
    <main>
      {/* ===== SECTION: PRICING TRUST ===== */}
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

 
    </main>
  );
};

export default PricingPage;
