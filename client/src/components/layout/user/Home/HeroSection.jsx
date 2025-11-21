import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import msmeLogo from "../../../../assets/logo/msme_logo.png";
import heroBg from "../../../../assets/images/hero_background.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full py-16">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-35 -scale-x-100"
    style={{
      backgroundImage: `url(${heroBg})`,
      opacity: 0.35    // adjust this to match your screenshot
      
    }}
  ></div>

  {/* Soft White Overlay */}
  <div className="absolute inset-0 bg-white/20"></div>

  {/* Your Content */}
  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* MSME Badge */}
          <div className="inline-flex items-center gap-3 bg-orange-100 px-4 py-3 rounded-full shadow-sm mb-6 border border-orange-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <img src={msmeLogo} alt="MSME Registered" className="w-16 h-auto object-contain" />
            <p className="text-black-700 font-semibold text-sm" style={{ fontFamily: "Quicksand, sans-serif" }}>
              MSME Registered • Certified Training Provider
            </p>
          </div>

          {/* HEADING */}
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="text-black">Kickstart Your </div>
            <div className="text-orange-500">Data & AI Career </div>
            <div className="text-black">With Experts Who Build </div>
            <div className="text-orange-500">What They Teach</div>
          </h1>

          {/* SUBTEXT */}
          <p
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Designed for working professionals ready to grow, switch or lead in
            the world of Data, AI, Cloud and Analytics.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explore Courses
            </button>

            <button
  className="bg-gray-0 hover:bg-gray-200 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 transition"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  Success Stories
</button>

          </div>

          {/* Become a Trainer */}
          <button className="text-gray-600 font-semibold relative group">
  Become a Trainer →
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
</button>

        </div>

        {/* RIGHT — FORM CARD */}
        <div>
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2
              className="text-2xl font-bold mb-2 text-gray-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Book a Free Demo Session
            </h2>

            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              Take the first step towards your growth.
            </p>

            <form className="space-y-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-xl border border-gray-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"

              />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-xl border border-gray-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"

              />

              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-full p-3 rounded-xl border border-gray-200 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"

              />

              <select
  className="w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm
             focus:border-orange-500 focus:ring-2 focus:ring-orange-300
             outline-none transition cursor-pointer text-gray-700
             hover:border-gray-300"
>
  <option>Select Course</option>
  <option>Data Engineering</option>
  <option>AI / ML</option>
  <option>Cloud Computing</option>
  <option>Analytics</option>
</select>


              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
              >
                Submit Request
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4 text-center flex justify-center items-center gap-2">
  <FaCheckCircle className="text-orange-500" />
  Our team will reach out within 24 hours.
</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
