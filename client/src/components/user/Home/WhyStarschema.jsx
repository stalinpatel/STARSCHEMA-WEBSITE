import React from "react";
import frame1 from "../../../assets/images/home/frame_1.png";
import frame2 from "../../../assets/images/home/frame_2.png";
import frame3 from "../../../assets/images/home/frame_3.png";
import frame4 from "../../../assets/images/home/frame_4.png";
import frame5 from "../../../assets/images/home/frame_5.png";
import frame6 from "../../../assets/images/home/frame_6.png";

const WhyStarSchema = () => {
  const cardsData = [
    {
      img: frame1,
      title: "Career Mentorship",
      desc: "Get personal guidance and roadmap planning from experienced mentors.",
    },
    {
      img: frame2,
      title: "Live Sessions Only",
      desc: "Real-time, instructor-led classes designed to mirror real work environments.",
    },
    {
      img: frame3,
      title: "MSME Certified",
      desc: "A government-recognized institute trusted for quality and authenticity.",
    },
    {
      img: frame4,
      title: "Practicing Professionals",
      desc: "Learn directly from experts active in Data, AI, and Cloud projects daily.",
    },
    {
      img: frame5,
      title: "Production Ready Skills",
      desc: "Master the same tools and workflows used by top firms.",
    },
    {
      img: frame6,
      title: "Real World Projects",
      desc: "Work on hands-on projects that build real experience and portfolio credibility.",
    },
  ];

  return (
    <div className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3">
          Why StarSchema?
        </h2>

        <p className="text-center text-gray-600 mb-10 sm:mb-14 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          We help you grow with practical, real-world skills and complete career support.
        </p>

        {/* Cards Grid */}
        <div
          className="
            grid 
            grid-cols-1       /* mobile */
            sm:grid-cols-2    /* tablets */
            lg:grid-cols-3    /* laptops & desktops */
            gap-6 
            sm:gap-8 
            lg:gap-10
          "
        >
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="
                p-6 sm:p-8 lg:p-10
                bg-white 
                shadow-md 
                rounded-2xl 
                hover:shadow-xl 
                transition 
                duration-300
                text-center
              "
            >
              {/* Centered Image */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyStarSchema;