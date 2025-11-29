import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description || course.shortDesc}</p>
        {course.category && (
          <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
            {course.category}
          </span>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
