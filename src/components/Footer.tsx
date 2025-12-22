

const Footer = () => {
  return (
   <footer className="bg-primary text-dark py-10 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        {/* === CỘT 1: Thông tin công ty === */}
        <div>
          <h2 className="text-lg font-bold text-secondary uppercase mb-3">
            CÔNG TY TNHH DỊCH VỤ KỸ THUẬT FIXHOME
          </h2>
          <p className="text-sm text-dark mb-4">
            FixHome là đơn vị dịch vụ kỹ thuật Thi Công – Lắp Đặt – Bảo Trì – Sửa Chữa – 
            Vệ sinh với hàng trăm dịch vụ dành cho hộ gia đình (Dân Dụng) và nhà máy/xí nghiệp (Công Nghiệp).
          </p>

          <ul className="text-sm space-y-1">
            <li>🏠 <strong>Trụ sở:</strong> 25/6 Phùng Văn Cung, P. Cầu Kiệu, TP.HCM</li>
            <li>🏢 <strong>Văn phòng:</strong> 88 đường số 18, P. Hiệp Bình, TP.HCM</li>
          </ul>

          {/* Dropdown chi nhánh */}
          <div className="mt-4 space-y-2">
            <select className="w-full border border-dark rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary">
              <option>Các chi nhánh của FixHome tại TP. Hồ Chí Minh</option>
            </select>
            <select className="w-full border border-dark rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary">
              <option>Các chi nhánh của FixHome tại các tỉnh</option>
            </select>
          </div>
        </div>

        {/* === CỘT 2: Giới thiệu === */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">Giới thiệu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-secondary">Về FixHome</a></li>
            <li><a href="#" className="hover:text-secondary">Hệ sinh thái FixHome</a></li>
            <li><a href="#" className="hover:text-secondary">Tuyển dụng FixHome</a></li>
            <li><a href="#" className="hover:text-secondary">Chính sách phục vụ</a></li>
            <li><a href="#" className="hover:text-secondary">Bản tin FixHome</a></li>
            <li><a href="#" className="hover:text-secondary">Chương trình khuyến mãi</a></li>
            <li><a href="#" className="hover:text-secondary">Quy chuẩn đồng phục</a></li>
          </ul>
        </div>

        {/* === CỘT 3: Kết nối + Ứng dụng === */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">Kết nối với FixHome</h3>
          <ul className="text-sm space-y-1 mb-4">
            <li>📞 <strong>Gọi đặt lịch:</strong> 1800 8122</li>
            <li>📱 <strong>Quản lý:</strong> 0915 339 118 (Mrs Như)</li>
            <li>✉️ <strong>Email:</strong> info@fixhome.vn</li>
          </ul>

            
        </div>
      </div>

      {/* Dòng bản quyền cuối */}
      <div className="text-center text-sm text-dark mt-8 border-t border-secondary pt-4">
        © 2025 FixHome - Dịch vụ kỹ thuật & bảo trì chuyên nghiệp.
      </div>
    </footer>
  );
};

export default Footer;
