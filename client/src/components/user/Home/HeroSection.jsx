import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import msmeLogo from "../../../assets/logo/msme_logo.png";
import heroBg from "../../../assets/images/hero_background.jpg";
import axios from "axios";


const HeroSection = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [formErrors, setFormErrors] = React.useState({});

  return (
    <section className="relative w-full py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 -scale-x-100"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 0.35,
        }}
      ></div>

      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <div
            className="inline-flex items-center gap-3 bg-orange-100 px-4 py-3 rounded-full shadow-sm mb-6 border border-orange-300"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <img src={msmeLogo} alt="MSME Registered" className="w-16 h-auto object-contain" />
            <p className="text-black-700 font-semibold text-sm" style={{ fontFamily: "Quicksand, sans-serif" }}>
              MSME Registered • Certified Training Provider
            </p>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="text-black">Kickstart Your </div>
            <div className="text-orange-500">Data & AI Career </div>
            <div className="text-black">With Experts Who Build </div>
            <div className="text-orange-500">What They Teach</div>
          </h1>

          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
            Designed for working professionals ready to grow, switch or lead in
            the world of Data, AI, Cloud and Analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md transition">
              Explore Courses
            </button>

            <button className="bg-gray-0 hover:bg-gray-200 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-orange-500 transition">
              Success Stories
            </button>
          </div>

          <button className="text-gray-600 font-semibold relative group">
            Become a Trainer →
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              Book a Free Demo Session
            </h2>

            <p className="text-gray-600 mb-6" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Take the first step towards your growth.
            </p>

            {/* FORM START */}
            <form
              className="space-y-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onSubmit={async (e) => {
  e.preventDefault();

  const errors = {};

  if (!fullName.trim()) errors.fullName = "Full name is required";
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Enter a valid email";
  }
  if (!phone.trim()) {
    errors.phone = "Contact number is required";
  } else if (phone.length < 10) {
    errors.phone = "Phone number must be at least 10 digits";
  }
  if (!course) errors.course = "Please select a course";

  setFormErrors(errors);

  if (Object.keys(errors).length > 0) return;

  try {
    const res = await axios.post("http://localhost:2000/api/leads", {
      name: fullName,
      email,
      phone,
      courseChoice: course,
      source: "hero"
    });

    alert("Demo session request submitted successfully!");

    // Clear form
    setFullName("");
    setEmail("");
    setPhone("");
    setCourse("");
  } catch (error) {
    console.error(error);
    alert("Something went wrong while submitting the form.");
  }
}}

            >
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full p-3 rounded-xl border shadow-sm outline-none transition ${
                    formErrors.fullName
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 rounded-xl border shadow-sm outline-none transition ${
                    formErrors.email
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full p-3 rounded-xl border shadow-sm outline-none transition ${
                    formErrors.phone
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>

              {/* Course */}
              <div>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className={`w-full p-3 rounded-xl border bg-white shadow-sm outline-none transition cursor-pointer text-gray-700 ${
                    formErrors.course
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                  }`}
                >
                  <option value="">Select Course</option>
                  <option>Data Engineering</option>
                  <option>AI / ML</option>
                  <option>Cloud Computing</option>
                  <option>Analytics</option>
                </select>
                {formErrors.course && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.course}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
              >
                Submit Request
              </button>
            </form>
            {/* FORM END */}

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
