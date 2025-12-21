import AuthLayout from "@/components/auth/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import { useAuthForm } from "@/hooks/useAuthForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const auth = useAuthForm("register");
  const navigate = useNavigate();

  return (
    <AuthLayout title="Đăng ký">
      <AuthForm
        mode="register"
        {...auth}
        onSubmit={async () => {
          const success = await auth.submit();
          if (success) {
            navigate("/"); // ✅ về trang chủ
          }
        }}
      />

      <p className="text-center text-sm text-muted mt-6">
        Đã có tài khoản?{" "}
        <Link to="/dang-nhap" className="text-secondary font-medium">
          Đăng nhập
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
