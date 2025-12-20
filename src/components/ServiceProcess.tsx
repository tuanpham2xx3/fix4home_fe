import React from "react";
import { ProcessStep } from "../types/process";

interface ServiceProcessProps {
  steps: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ steps }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-dark mb-12">
          Quy Trình Làm Việc
        </h2>

        <div className="relative">
          {/* Timeline line – chỉ hiện desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                      {/* Header */}
                      <div
                        className={`px-6 py-4 font-semibold text-dark ${
                          step.headerColor ?? "bg-gray-100"
                        }`}
                      >
                        Bước {step.step}: {step.title}
                      </div>

                      {/* Content */}
                      <div className="px-6 py-4">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {step.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
