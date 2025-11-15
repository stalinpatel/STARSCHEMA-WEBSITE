import React from "react";

// Hero Section
function HeroSection() {
  return (
    <section className="bg-linear-to-br from-orange-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span
              className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              #1 Ranked on UrbanPro ⭐
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Master Data & AI with
            <span className="text-orange-500"> Expert Training</span>
          </h1>
          <p
            className="text-xl text-gray-600 mb-8"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Transform your career with industry-leading courses in Data
            Engineering, AI/ML, Cloud Technologies, and Analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explore Courses
            </button>
            <button
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Corporate Clients" },
    { value: "15+", label: "Expert Trainers" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-orange-500 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-gray-400"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
    </div>
  );
};

export default Home;
