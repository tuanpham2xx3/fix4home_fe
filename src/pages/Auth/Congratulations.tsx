import { Link } from "react-router-dom";

const Congratulations = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">
          🎉 Đăng ký thành công
        </h1>
        <p>
          Tài khoản của bạn đã được kích hoạt.
          <br />
          Vui lòng đăng nhập để sử dụng hệ thống.
        </p>

        <Link
          to="/dang-nhap"
          className="inline-block px-6 py-3 bg-primary text-dark rounded-lg font-medium"
        >
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Congratulations;
