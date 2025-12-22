import PasswordInput from "./PasswordInput";

interface AuthFormProps {
  mode: "login" | "register";
  form: Record<string, string>;
  errors: Record<string, string>;
  loading: boolean;
  update: (key: string, value: string) => void;
  onSubmit: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  form,
  errors,
  loading,
  update,
  onSubmit,
}) => {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (!loading) onSubmit();
      }}
    >
      {/* REGISTER */}
      {mode === "register" && (
        <>
          <div>
            <input
              className="auth-input"
              placeholder="Họ và tên"
              disabled={loading}
              onChange={(e) => update("name", e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              className="auth-input"
              placeholder="Email"
              disabled={loading}
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </>
      )}

      {/* LOGIN */}
      {mode === "login" && (
        <div>
          <input
            className="auth-input"
            placeholder="Email"
            disabled={loading}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      )}

      {/* PASSWORD */}
      <div>
        <PasswordInput
          value={form.password || ""}
          onChange={(v) => update("password", v)}
          disabled={loading}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className={`
          w-full py-3 rounded-lg font-semibold
          flex items-center justify-center gap-2 transition
          ${
            loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary text-dark hover:opacity-90"
          }
        `}
      >
        {loading ? (
          <>
            <span className="h-5 w-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            Đang xử lý...
          </>
        ) : mode === "login" ? (
          "Đăng nhập"
        ) : (
          "Đăng ký"
        )}
      </button>
    </form>
  );
};

export default AuthForm;
