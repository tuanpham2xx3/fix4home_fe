import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, MenuItem } from "../utils/menuData";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const MenuIconComponent = IoMdMenu as React.ElementType;
  const CloseIconComponent = IoMdClose as React.ElementType;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <header className="sticky top-0 bg-primary text-dark shadow-md z-50 h-[72px] flex items-center">
      <div className="mx-10 flex justify-between items-center w-full h-full px-6">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-secondary font-heading flex items-center"
        >
          FixHome
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="text-secondary text-3xl md:hidden focus:outline-none flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <CloseIconComponent size={26} />
          ) : (
            <MenuIconComponent size={26} />
          )}
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 text-[15px] leading-none tracking-wide relative px-10 flex-nowrap whitespace-nowrap w-full h-full">
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
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-dark shadow-lg absolute top-full left-0 w-full border-t border-secondary animate-slide-down">
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

                {/* DROPDOWN MOBILE */}
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
