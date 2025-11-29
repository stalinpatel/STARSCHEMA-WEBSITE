import React, { useEffect, useState } from "react";
import coursebImage from "../../assets/images/courseb.jpeg";
import t1Image from "../../assets/images/t1.jpeg";
import tImage from "../../assets/images/t.jpeg";
import t3Image from "../../assets/images/t3.jpeg";

const About = () => {
  // Counter animation hook
  const Counter = ({ end, duration }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setValue(Math.ceil(start));
      }, 10);

      return () => clearInterval(timer);
    }, []);

    return <span>{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-200 py-14">

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900">
        About <span className="text-orange-600">StarSchema</span>
      </h1>

      <p className="text-center text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
        Empowering learners with real-world tech skills for modern industries.
      </p>

      {/* 1. Company Intro */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

        {/* Image */}
        <img
          src={coursebImage}
          alt="Company Intro"
          className="rounded-3xl shadow-2xl w-[90%] mx-auto border-4 border-orange-300 hover:scale-105 transition-all duration-300"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            StarSchema is a leading Ed-Tech platform delivering industry-ready
            training across Data Science, AI, Cloud Computing, and Software Development.
          </p>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-orange-500">
          <h3 className="text-3xl font-bold text-orange-600">Our Mission</h3>
          <p className="mt-4 text-gray-700">
            To empower learners with practical, real-time skills.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-orange-500">
          <h3 className="text-3xl font-bold text-orange-600">Our Vision</h3>
          <p className="mt-4 text-gray-700">
            To become India’s most trusted and innovative platform.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
          Why Choose <span className="text-orange-600">StarSchema?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold text-orange-600">Industry-Focused</h3>
            <p className="text-gray-600 mt-3">Designed by IT professionals.</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold text-orange-600">Expert Trainers</h3>
            <p className="text-gray-600 mt-3">Learn from experts.</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold text-orange-600">Hands-on Projects</h3>
            <p className="text-gray-600 mt-3">Build real experience.</p>
          </div>
        </div>
      </div>

      {/* Stats with Counter Animation */}
      <div className="mt-24 bg-orange-600 py-14 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-extrabold">
              <Counter end={500} duration={2000} />+
            </h3>
            <p className="mt-2">Students</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">
              <Counter end={20} duration={2000} />+
            </h3>
            <p className="mt-2">Courses</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">
              <Counter end={95} duration={2000} />%
            </h3>
            <p className="mt-2">Satisfaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">
              <Counter end={10} duration={2000} />+
            </h3>
            <p className="mt-2">Mentors</p>
          </div>

        </div>
      </div>

      {/* Story */}
      <div className="max-w-5xl mx-auto mt-24 px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our Journey <span className="text-orange-600">Story</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          StarSchema started with a mission to close the skill gap.
        </p>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
          Meet Our <span className="text-orange-600">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <img src={t1Image} className="w-32 h-32 mx-auto rounded-full border-4 border-orange-300" />
            <h3 className="mt-4 text-xl font-bold">Trainer 1</h3>
            <p className="text-gray-600">Cloud Specialist</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <img src={tImage} className="w-32 h-32 mx-auto rounded-full border-4 border-orange-300" />
            <h3 className="mt-4 text-xl font-bold">Trainer 2</h3>
            <p className="text-gray-600">Data Scientist</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <img src={t3Image} className="w-32 h-32 mx-auto rounded-full border-4 border-orange-300" />
            <h3 className="mt-4 text-xl font-bold">Trainer 3</h3>
            <p className="text-gray-600">AI & ML Expert</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
