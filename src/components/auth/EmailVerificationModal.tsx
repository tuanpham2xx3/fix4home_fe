interface Props {
  email: string;
  open: boolean;
  loading: boolean;
  error?: string;
  onCheck: () => void;
}

const EmailVerificationModal: React.FC<Props> = ({
  email,
  open,
  loading,
  error,
  onCheck,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] space-y-4">
        <h2 className="text-lg font-semibold">
          Bạn đăng ký sắp xong rồi 🎉
        </h2>

        <p className="text-sm text-muted">
          Chúng tôi đã gửi email xác thực đến:
          <br />
          <strong>{email}</strong>
        </p>

        <p className="text-sm">
          Vui lòng bấm vào liên kết trong email để kích hoạt tài khoản.
        </p>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <button
          onClick={onCheck}
          disabled={loading}
          className="w-full py-2 bg-primary text-dark rounded-lg font-medium"
        >
          {loading ? "Đang kiểm tra..." : "Đã ấn liên kết"}
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
