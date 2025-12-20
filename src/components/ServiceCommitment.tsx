import React from "react";
import { CommitmentData } from "@/types/commitment";

interface ServiceCommitmentProps {
  data: CommitmentData;
}

const ServiceCommitment: React.FC<ServiceCommitmentProps> = ({ data }) => {
  return (
  <section className="py-20 bg-gray-100">
      <div className="max-w-8xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="w-full h-[320px] md:h-[420px] overflow-hidden rounded-xl shadow-sm">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full "
              />
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">
                {data.title}
              </h2>

              {data.description && (
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {data.description}
                </p>
              )}

              <ul className="space-y-4">
                {data.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mt-2 mr-3 w-2.5 h-2.5 bg-primary rounded-full shrink-0" />
                    <span className="text-gray-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCommitment;
