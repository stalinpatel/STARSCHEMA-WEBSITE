import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const stats = [
    { value: 500, label: "Students Trained" },
    { value: 50, label: "Corporate Clients" },
    { value: 15, label: "Expert Trainers" },
    { value: 98, label: "Success Rate" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // 2 secs
            const increment = end / (duration / 20);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                clearInterval(timer);
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = end;
                  return updated;
                });
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.floor(start);
                  return updated;
                });
              }
            }, 20);
          });
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-orange-500 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {counts[index]}+
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
};

export default StatsSection;