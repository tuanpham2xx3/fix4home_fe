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
        onSubmit();
      }}
    >
      {/* REGISTER FIELDS */}
      {mode === "register" && (
        <>
          <div>
            <input
              className="auth-input"
              placeholder="Họ và tên"
              onChange={(e) => update("name", e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              className="auth-input"
              placeholder="Số điện thoại"
              onChange={(e) => update("phone", e.target.value)}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              className="auth-input"
              placeholder="Email (Gmail)"
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </>
      )}

      {/* LOGIN FIELD */}
      {mode === "login" && (
        <div>
          <input
            className="auth-input"
            placeholder="Email hoặc số điện thoại"
            onChange={(e) => update("identifier", e.target.value)}
          />
          {errors.identifier && (
            <p className="text-red-500 text-xs mt-1">
              {errors.identifier}
            </p>
          )}
        </div>
      )}

      {/* PASSWORD */}
      <div>
        <PasswordInput
          value={form.password || ""}
          onChange={(v) => update("password", v)}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

     <button
  type="submit"
  disabled={loading}
  className={`
    w-full
    py-3
    rounded-lg
    font-semibold
    flex
    items-center
    justify-center
    gap-2
    transition
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
