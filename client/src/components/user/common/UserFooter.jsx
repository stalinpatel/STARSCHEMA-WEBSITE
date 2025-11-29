import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

const UserFooter = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4 -mt-4">
              <img
                src="/logo.png"
                alt="StarSchema Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 transition-all duration-300"
              />

              {/* EXACT NAVBAR LOGO STYLE */}
              <span
  className="text-xl pb-0.5 sm:text-3xl tracking-wide text-white"
  style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold' }}
>
  Star<span style={{ color: '#F97316' }}>Schema</span>
</span>

            </div>

            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Leading IT training and consulting services in Data & Analytics,
              AI, and Cloud Technologies.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                ["About Us", "#about"],
                ["Our Courses", "#courses"],
                ["Services", "#services"],
                ["Success Stories", "#"],
                ["Contact Us", "#contact"],
              ].map(([label, link], i) => (
                <li key={i}>
                  <a
                    href={link}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Generative AI & LLMs",
                "Data Engineering",
                "Power BI",
                "Data Science",
                "Azure/AWS",
              ].map((course, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-orange-500" />
                <a href="tel:9849257188" className="hover:text-orange-500">
                  9849257188
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-orange-500" />
                <a
                  href="mailto:info@starschema.in"
                  className="hover:text-orange-500"
                >
                  info@starschema.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-orange-500" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
            <p>&copy; 2024 StarSchema Enterprises. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default UserFooter;
