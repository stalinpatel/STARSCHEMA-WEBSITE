import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/user/Courses/CourseCard";
import coursesData from "../../data/coursesData";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Our <span className="text-orange-600">Courses</span>
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Explore our comprehensive range of courses designed to help you master in-demand skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
