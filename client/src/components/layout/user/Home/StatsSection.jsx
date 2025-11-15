import React from 'react';

const StatsSection = () => {
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
};

export default StatsSection;