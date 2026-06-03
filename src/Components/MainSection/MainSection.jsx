import React from "react";
import { LuLaptopMinimal } from "react-icons/lu";
import { LiaHandPointUp } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import { FaEarthAmericas } from "react-icons/fa6";

function MainSection() {
  const cardsData = [
    {
      id: 1,
      icon: <LuLaptopMinimal />,
      title: "e-Governance @UGC",
      active: true,
    },
    { id: 2, icon: <LiaHandPointUp />, title: "Key Initiatives" },
    { id: 3, icon: <FaGraduationCap />, title: "Student Corner" },
    {
      id: 4,
      icon: <HiUserGroup />,
      title: "Faculty Corner/ Non-Teaching Staff",
    },
    { id: 5, icon: <AiFillBank />, title: "Details of HEIs" },
    { id: 6, icon: <FaEarthAmericas />, title: "UGC Green Initiatives" },
  ];

  return (
    <div className="bg-[#1e1a3a] p-8 w-full min-h-fit flex justify-center items-center font-sans">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl">
        {cardsData.map((item) => (
          <div
            key={item.id}
            className={`
              bg-white p-5 min-h-[160px] flex flex-col justify-center items-center text-center shadow-md cursor-pointer
              transition-all duration-200 border-l-4 border-transparent
              // Hover Effect: Hover karne par border dikhega 
              hover:border-orange-500 hover:rounded-l-none rounded-xl
              /* First card ko hamesha active dikhane ke liye */
              ${item.active ? "border-orange-500 rounded-l-none" : ""}
            `}
          >
            {/* Icon Color & Size */}
            <div className="text-4xl text-orange-500 mb-3">{item.icon}</div>

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
