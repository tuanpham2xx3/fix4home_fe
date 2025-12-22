import { useState } from "react";
import { isValidEmail, isValidPassword } from "@/utils/validators";
import { authApi } from "@/api/auth.api";
import { useAuth } from "@/contexts/AuthContext";

export type AuthMode = "login" | "register";

export const useAuthForm = (mode: AuthMode) => {
  const { login: setAuth } = useAuth(); // ✅ LẤY TỪ CONTEXT

  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};

    if (mode === "register") {
      if (!form.name?.trim()) {
        e.name = "Vui lòng nhập họ tên";
      }

      if (!isValidEmail(form.email || "")) {
        e.email = "Email không hợp lệ";
      }
    }

    if (mode === "login") {
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

  /* ================= REGISTER ================= */

  const submitRegister = async (): Promise<string | null> => {
    if (mode !== "register") return null;
    if (!validate()) return null;

    setLoading(true);
    try {
      await authApi.register(form.email, form.password);
      return form.email;
    } catch (err: any) {
      setErrors({
        email: err.response?.data?.userMessage || "Đăng ký thất bại",
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGIN ================= */

  const submitLogin = async (): Promise<boolean> => {
    if (mode !== "login") return false;
    if (!validate()) return false;

    setLoading(true);
    try {
      const res = await authApi.login(form.email, form.password);
      const data = res.data.data;

      if (data.status !== "ACTIVE") {
        setErrors({
          email: "Tài khoản chưa được kích hoạt",
        });
        return false;
      }
      setAuth(
        {
          userId: data.userId,
          name: data.username,
          email: data.email,
          role: "CUSTOMER", 
          status: data.status,
        },
        data.accessToken,
        data.refreshToken
      );

      return true;
    } catch (err: any) {
      setErrors({
        email:
          err.response?.data?.userMessage ||
          "Email hoặc mật khẩu không đúng",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    errors,
    loading,
    update,
    submitRegister,
    submitLogin,
  };
};
