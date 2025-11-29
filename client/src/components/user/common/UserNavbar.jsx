import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex gap-0.5 items-center ">
            <img
              src="/logo.png"
              alt="StarSchema Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 transition-all duration-300"
            />
            <span className="text-xl pb-0.5 sm:text-3xl font-extrabold tracking-wide text-text-primary accent">
              Star<span className="text-primary">Schema</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href);

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 font-medium transition-colors ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9849257188"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">9849257188</span>
            </a>
            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href);

              return (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-3 font-medium transition-colors ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && (
                    <div className="pl-4 space-y-2 mb-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="/"
                          className="block py-2 text-sm text-gray-600 hover:text-orange-500"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => navigate("/")}
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default UserNavbar;
