import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import EmailVerificationModal from "@/components/auth/EmailVerificationModal";

import { useAuthForm } from "@/hooks/useAuthForm";
import { authApi } from "@/api/auth.api";

const Register = () => {
  const auth = useAuthForm("register");
  const navigate = useNavigate();

  const [openVerify, setOpenVerify] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const [verifyError, setVerifyError] = useState("");


  const handleRegister = async () => {
    const email = await auth.submitRegister();
    if (email) {
      setRegisteredEmail(email);
      setVerifyError("");
      setOpenVerify(true); 
    }
  };

 
  const checkActivation = async () => {
    if (!registeredEmail) return;

    try {
      const res = await authApi.checkActivationStatus(registeredEmail);
      const data = res.data.data;

      if (data.isActivated || data.userStatus === "ACTIVE") {
        setOpenVerify(false);
        navigate("/congratulations");
      } else {
        setVerifyError(
          "Tài khoản chưa được kích hoạt, vui lòng kiểm tra hòm thư email."
        );
      }
    } catch (error) {
      setVerifyError("Không tìm thấy tài khoản. Vui lòng thử lại.");
    }
  };

  return (
    <AuthLayout title="Đăng ký">
      <AuthForm
        mode="register"
        form={auth.form}
        errors={auth.errors}
        loading={auth.loading}
        update={auth.update}
        onSubmit={handleRegister}
      />

      <p className="text-center text-sm text-muted mt-6">
        Đã có tài khoản?{" "}
        <Link to="/dang-nhap" className="text-secondary font-medium">
          Đăng nhập
        </Link>
      </p>

 
      <EmailVerificationModal
        open={openVerify}
        email={registeredEmail || ""}
        loading={auth.loading}
        error={verifyError}
        onCheck={checkActivation}
      />
    </AuthLayout>
  );
};

export default Register;
