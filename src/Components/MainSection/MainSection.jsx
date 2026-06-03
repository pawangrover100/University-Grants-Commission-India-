import React from "react";
import { LuLaptopMinimal } from "react-icons/lu";
import { LiaHandPointUp } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import { FaEarthAmericas } from "react-icons/fa6";

function MainSection() {
  // 1. Data ko image ke hisaab se update kiya
  const cardsData = [
    { id: 1, icon: <LuLaptopMinimal className="text-4xl text-orange-500 mb-3" />, title: "e-Governance @UGC", hasLeftBorder: true },
    { id: 2, icon: <LiaHandPointUp className="text-4xl text-orange-500 mb-3" />, title: "Key Initiatives" },
    { id: 3, icon: <FaGraduationCap className="text-4xl text-orange-500 mb-3" />, title: "Student Corner" },
    { id: 4, icon: <HiUserGroup className="text-4xl text-orange-500 mb-3" />, title: "Faculty Corner/ Non-Teaching Staff" },
    { id: 5, icon: <AiFillBank className="text-4xl text-orange-500 mb-3" />, title: "Details of HEIs" },
    { id: 6, icon: <FaEarthAmericas className="text-4xl text-orange-500 mb-3" />, title: "UGC Green Initiatives" },
  ];

  return (
    // Outer section jiska background image jaisa dark purple/blue hai
    <div className="bg-[#1e1a3a] p-8 w-full min-h-fit flex justify-center items-center">
      
      {/* Cards container: Responsive Grid layout jo cards ko ek line mein set karega */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-7xl">
        
        {cardsData.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl p-5 min-h-[160px] flex flex-col justify-center items-center text-center shadow-md transition-transform hover:scale-105 duration-200
              ${item.hasLeftBorder ? "border-l-4 border-orange-500 rounded-l-none" : ""}`}
          >
            {/* Icon section */}
            <div className="flex justify-center items-center">
              {item.icon}
            </div>
            
            {/* Title section */}
            <h3 className="text-gray-700 font-bold text-sm leading-snug">
              {item.title}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}

export default MainSection;