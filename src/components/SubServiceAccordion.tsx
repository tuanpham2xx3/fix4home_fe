import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { SubService } from "@/mocks/pricingData";

interface Props {
  subServices: SubService[];
}

const SubServiceAccordion: React.FC<Props> = ({ subServices }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y">
      {subServices.map((sub) => {
        const isOpen = openId === sub.id;

        return (
          <div key={sub.id}>
            {/* Header – click cả hàng */}
            <button
              onClick={() => toggle(sub.id)}
              className="flex w-full items-center justify-between py-3 text-left font-medium hover:bg-gray-50"
            >
              <span>{sub.name}</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Pricing table */}
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
  );
};

export default SubServiceAccordion;
