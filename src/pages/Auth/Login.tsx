import AuthLayout from "@/components/auth/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import { useAuthForm } from "@/hooks/useAuthForm";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = useAuthForm("login");

  return (
    <AuthLayout title="Đăng nhập">
      <AuthForm
        mode="login"
        {...auth}
        onSubmit={async () => {
          const success = await auth.submit();
          if (success) {
            console.log("LOGIN OK");
          }
        }}
      />

      <div className="mt-4 text-right">
        <Link
          to="/quen-mat-khau"
          className="text-sm text-secondary hover:underline"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <p className="text-center text-sm text-muted mt-6">
        Chưa có tài khoản?{" "}
        <Link to="/dang-ky" className="text-secondary font-medium">
          Đăng ký ngay
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
