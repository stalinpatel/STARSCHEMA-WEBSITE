import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../../data/coursesData";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">

      {/* ===== Banner Image ===== */}
      <div className="w-full flex justify-center">
        <img
          src={course.image}
          alt="Course Banner"
          className="rounded-3xl shadow-2xl w-[85%] md:w-[60%] border-4 border-orange-300"
        />
      </div>

      {/* ===== Title + Description ===== */}
      <div className="max-w-4xl mx-auto text-center mt-10 px-6">
        <h1 className="text-5xl font-extrabold text-gray-900">
          {course.title}
        </h1>

        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* ===== What You Will Learn ===== */}
      <div className="max-w-5xl mx-auto mt-14 px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          What You Will Learn
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
          <li>Complete HTML, CSS, JavaScript grounding</li>
          <li>React fundamentals, routing, and component-based design</li>
          <li>Node.js & Express backend APIs</li>
          <li>MongoDB database handling with Mongoose</li>
          <li>Authentication, JWT, protected routes</li>
          <li>Real-time hands-on project deployment</li>
        </ul>
      </div>

      {/* ===== FAQ ===== */}
      <div className="max-w-5xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 mb-4">
          <h3 className="font-bold text-xl text-gray-900">
            Is this course beginner-friendly?
          </h3>
          <p className="text-gray-600 mt-2">
            Yes! We start from scratch and slowly level up with real projects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 mb-4">
          <h3 className="font-bold text-xl text-gray-900">
            Will I get placement support?
          </h3>
          <p className="text-gray-600 mt-2">
            Absolutely! Resume building, mock interview sessions included.
          </p>
        </div>
      </div>

      {/* ===== Call to Action ===== */}
      <div className="text-center mt-16">
        <button className="bg-orange-600 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
