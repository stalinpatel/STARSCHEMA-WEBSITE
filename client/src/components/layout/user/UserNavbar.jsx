import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    {
      name: "Courses",
      href: "#courses",
      dropdown: [
        "Generative AI & LLMs",
        "Data Architecture",
        "Data Modeling",
        "Data Engineering",
        "Data Visualization",
        "Data Analytics",
        "Data Science",
        "Data Governance",
        "Databases",
      ],
    },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        "Corporate Training",
        "Individual Training",
        "Group Training",
        "IT Consulting",
        "Custom Solutions",
      ],
    },
    {
      name: "Resources",
      href: "#resources",
      dropdown: ["Blog", "Case Studies", "Free Resources", "FAQ", "Tutorials"],
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-3">
              {/* Circular Logo */}
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden shadow-md">
                <img 
                  src="/logo.png" 
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Brand Name */}
              <span
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Star<span className="text-orange-500">Schema</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>

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
            ))}
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
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-orange-500 font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.name}
                </a>

                {item.dropdown && (
                  <div className="pl-4 space-y-2 mb-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-2 text-sm text-gray-600 hover:text-orange-500"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
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