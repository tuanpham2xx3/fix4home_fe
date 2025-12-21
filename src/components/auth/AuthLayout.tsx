import React from "react";
import {fixhomeLogo} from "@/assets/images";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div
        className="
          w-full
          max-w-md
          md:max-w-lg
          lg:max-w-xl
          bg-white
          rounded-2xl
          shadow-lg
          px-6
          py-8
          md:px-10
          md:py-10
        "
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={fixhomeLogo}
            alt="FixHome"
            className="h-20 md:h-24 lg:h-28 mb-3"
          />
          <p className="text-secondary text-sm md:text-base">
            Chăm sóc ngôi nhà của bạn
          </p>
        </div>

        <h1 className="text-xl md:text-2xl font-heading font-semibold text-center mb-8">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;