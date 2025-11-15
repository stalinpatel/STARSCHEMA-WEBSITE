import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

const UserFooter = () => {
  return (
     <footer
       className="bg-gray-900 text-gray-300"
       style={{ fontFamily: "DM Sans, sans-serif" }}
     >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
           {/* Company Info */}
           <div>
             <div className="flex items-center gap-2 mb-4">
               <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-xl">S</span>
               </div>
               <span
                 className="text-2xl font-bold text-white"
                 style={{ fontFamily: "Poppins, sans-serif" }}
               >
                 Star<span className="text-orange-500">Schema</span>
               </span>
             </div>
             <p className="text-sm mb-4">
               Leading IT training and consulting services in Data & Analytics,
               AI, and Cloud Technologies.
             </p>
             <div className="flex gap-4">
               <a
                 href="#"
                 className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
               >
                 <Linkedin className="w-4 h-4" />
               </a>
               <a
                 href="#"
                 className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
               >
                 <Twitter className="w-4 h-4" />
               </a>
               <a
                 href="#"
                 className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
               >
                 <Facebook className="w-4 h-4" />
               </a>
               <a
                 href="#"
                 className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
               >
                 <Youtube className="w-4 h-4" />
               </a>
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h3
               className="text-white font-semibold mb-4"
               style={{ fontFamily: "Poppins, sans-serif" }}
             >
               Quick Links
             </h3>
             <ul className="space-y-2 text-sm">
               <li>
                 <a
                   href="#about"
                   className="hover:text-orange-500 transition-colors"
                 >
                   About Us
                 </a>
               </li>
               <li>
                 <a
                   href="#courses"
                   className="hover:text-orange-500 transition-colors"
                 >
                   Our Courses
                 </a>
               </li>
               <li>
                 <a
                   href="#services"
                   className="hover:text-orange-500 transition-colors"
                 >
                   Services
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-orange-500 transition-colors">
                   Success Stories
                 </a>
               </li>
               <li>
                 <a
                   href="#contact"
                   className="hover:text-orange-500 transition-colors"
                 >
                   Contact Us
                 </a>
               </li>
             </ul>
           </div>
 
           {/* Popular Courses */}
           <div>
             <h3
               className="text-white font-semibold mb-4"
               style={{ fontFamily: "Poppins, sans-serif" }}
             >
               Popular Courses
             </h3>
             <ul className="space-y-2 text-sm">
               <li>
                 <a href="#" className="hover:text-orange-500 transition-colors">
                   Generative AI & LLMs
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-orange-500 transition-colors">
                   Data Engineering
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-orange-500 transition-colors">
                   Power BI
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-orange-500 transition-colors">
                   Data Science
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-orange-500 transition-colors">
                   Azure/AWS
                 </a>
               </li>
             </ul>
           </div>
 
           {/* Contact Info */}
           <div>
             <h3
               className="text-white font-semibold mb-4"
               style={{ fontFamily: "Poppins, sans-serif" }}
             >
               Contact Us
             </h3>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-2">
                 <Phone className="w-4 h-4 mt-0.5 flex shrink-0 text-orange-500" />
                 <a
                   href="tel:9849257188"
                   className="hover:text-orange-500 transition-colors"
                 >
                   9849257188
                 </a>
               </li>
               <li className="flex items-start gap-2">
                 <Mail className="w-4 h-4 mt-0.5 flex shrink-0 text-orange-500" />
                 <a
                   href="mailto:info@starschema.in"
                   className="hover:text-orange-500 transition-colors"
                 >
                   info@starschema.in
                 </a>
               </li>
               <li className="flex items-start gap-2">
                 <MapPin className="w-4 h-4 mt-0.5 flex shrink-0 text-orange-500" />
                 <span>Bhubaneswar, Odisha, India</span>
               </li>
             </ul>
             <div className="mt-4">
               <span
                 className="inline-block bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-semibold"
                 style={{ fontFamily: "Quicksand, sans-serif" }}
               >
                 #1 Ranked on UrbanPro
               </span>
             </div>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="pt-8 border-t border-gray-800">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
             <p>&copy; 2024 StarSchema Enterprises. All rights reserved.</p>
             <div className="flex gap-6">
               <a href="#" className="hover:text-orange-500 transition-colors">
                 Privacy Policy
               </a>
               <a href="#" className="hover:text-orange-500 transition-colors">
                 Terms of Service
               </a>
               <a href="#" className="hover:text-orange-500 transition-colors">
                 Cookie Policy
               </a>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
};

export default UserFooter;