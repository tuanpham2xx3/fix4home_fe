import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, MenuItem } from "../utils/menuData";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoNotificationsOutline, IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const MenuIconComponent = IoMdMenu as React.ElementType;
  const CloseIconComponent = IoMdClose as React.ElementType;
  const NotificationIcon = IoNotificationsOutline as React.FC<{
    size?: number;
  }>;
  const CalendarIcon = IoCalendarOutline as React.FC<{ size?: number }>;

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const displayName = user?.name || "Khách hàng";
  const avatarChar = displayName.charAt(0).toUpperCase();
  const handleLogout = () => {
    logout();
    navigate("/dang-nhap", { replace: true });
  };

  return (
    <header className="sticky top-0 bg-primary text-dark shadow-md z-50 h-[72px] flex items-center">
      <div className="flex justify-between items-center w-full h-full px-4 md:px-8 lg:px-10">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-secondary font-heading"
        >
          FixHome
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-4 text-secondary text-3xl 3xl:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <CloseIconComponent size={26} />
          ) : (
            <MenuIconComponent size={26} />
          )}
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden 3xl:flex items-center gap-[0.1rem] flex-1 justify-center">
          {menuItems.map((item: MenuItem) => (
            <div
              key={item.name}
              className="relative flex items-center h-full"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* MENU CHA */}
              {item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center h-full px-2 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="flex items-center h-full px-2">
                  {item.name}
                </span>
              )}

              {/* ICON DROPDOWN */}
              {item.subItems && (
                <button
                  type="button"
                  className="flex items-center h-full px-1 hover:text-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveMenu(activeMenu === item.name ? null : item.name);
                  }}
                >
                  ▾
                </button>
              )}

              {/* DROPDOWN */}
              {item.subItems && activeMenu === item.name && (
                <div className="absolute left-0 top-full bg-white text-dark rounded-b shadow-md w-48 z-[999]">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2 hover:bg-light hover:text-secondary transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* AUTH ACTIONS – DESKTOP */}
        <div className="flex items-center ml-auto gap-4">
          {!isAuthenticated ? (
            <>
              <Link
                to="/dang-nhap"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-black/5 transition"
              >
                Đăng nhập
              </Link>

              <Link
                to="/dang-ky"
                className="px-5 py-2 rounded-lg bg-secondary text-white text-sm font-semibold hover:opacity-90 transition"
              >
                Đăng ký
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3 h-full">
              {/* 🔔 THÔNG BÁO */}
              <Link
                to="/thong-bao"
                title="Thông báo"
                className="
      relative
      flex items-center justify-center
      w-5 h-5
      rounded-full
      text-secondary
      hover:text-dark
      hover:bg-black/5
      transition
    "
              >
                <NotificationIcon size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1 leading-none">
                  2
                </span>
              </Link>

              {/* 📅 ĐƠN / LỊCH */}
              <Link
                to="/don-lich"
                title="Đơn & lịch"
                className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      text-secondary
      hover:text-dark
      hover:bg-black/5
      transition
    "
              >
                <CalendarIcon size={22} />
              </Link>

              {/* USER MENU */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 cursor-pointer focus:outline-none"
                >
                  {/* AVATAR */}
                  <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center font-semibold">
                    {avatarChar}
                  </div>

                  {/* NAME */}
                  <span className="text-xs md:text-sm font-medium">
                    {displayName}
                  </span>
                </button>

                {/* DROPDOWN */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white text-dark rounded shadow-md z-50">
                    <Link
                      to="/tai-khoan"
                      className="block px-4 py-2 hover:bg-light"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Tài khoản
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-light text-red-500"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="3xl:hidden bg-white text-dark shadow-lg absolute top-full left-0 w-full border-t border-secondary animate-slide-down">
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map((item: MenuItem) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="flex justify-between items-center w-full text-left px-2 py-2 font-medium hover:text-secondary"
                >
                  {item.name}
                  {item.subItems && (
                    <span>{activeMenu === item.name ? "▴" : "▾"}</span>
                  )}
                </button>

                {item.subItems && activeMenu === item.name && (
                  <div className="pl-4 text-sm text-muted">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-2 py-1 hover:text-secondary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* AUTH – MOBILE */}
            <div className="mt-4 border-t pt-4">
              {!isAuthenticated ? (
                <div className="flex gap-2">
                  <Link
                    to="/dang-nhap"
                    className="flex-1 text-center py-2 border rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/dang-ky"
                    className="flex-1 text-center py-2 bg-secondary text-white rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Đăng ký
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-red-500"
                >
                  Đăng xuất
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
