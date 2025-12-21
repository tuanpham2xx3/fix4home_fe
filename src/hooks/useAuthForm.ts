import { useState } from "react";
import {
  isEmailOrPhone,
  isValidEmail,
  isValidVietnamPhone,
  isValidPassword,
} from "@/utils/validators";

export type AuthMode = "login" | "register";

export const useAuthForm = (mode: AuthMode) => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};

    if (mode === "login") {
      if (!isEmailOrPhone(form.identifier || "")) {
        e.identifier = "Email hoặc số điện thoại không hợp lệ";
      }
    }

    if (mode === "register") {
      if (!form.name?.trim()) e.name = "Vui lòng nhập họ tên";
      if (!isValidVietnamPhone(form.phone || "")) {
        e.phone = "Số điện thoại không hợp lệ";
      }
      if (!isValidEmail(form.email || "")) {
        e.email = "Email không hợp lệ";
      }
    }

    if (!isValidPassword(form.password || "")) {
      e.password = "Mật khẩu tối thiểu 6 ký tự";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return false;

    setLoading(true);

    // ⏳ fake delay để mô phỏng call API
    await new Promise((res) => setTimeout(res, 1000));

    if (mode === "login") {
      localStorage.setItem(
        "auth_user",
        JSON.stringify({ identifier: form.identifier })
      );
    }

    if (mode === "register") {
      localStorage.setItem("auth_user", JSON.stringify(form));
    }

    setLoading(false);
    return true;
  };

  return {
    form,
    errors,
    loading,
    update,
    submit,
  };
};
