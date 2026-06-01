import React from "react";
import { FaHome, FaInfoCircle, FaSearch } from "react-icons/fa";
import { MdArrowDropDown, MdArrowRightAlt } from "react-icons/md";

function SimpleNavbar() {
  return (
    <nav className="bg-[#ff6337] text-white px-4 py-3 relative">
      <ul className="flex justify-center items-center gap-6 text-sm font-light">
        {/* Home */}
        <li className="flex items-center gap-1 cursor-pointer  hover:text-gray-200">
          <FaHome />
          Home
        </li>

        {/* About Us - Standard Dropdown */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-1">
            <FaInfoCircle />
            <span>About Us</span>
            <MdArrowDropDown className="text-xl transition-transform group-hover:rotate-180" />
          </div>

          <ul className="absolute top-full left-0 hidden group-hover:block w-[260px] bg-white text-black shadow-lg border-t-2 border-orange-600 z-50">
            {[
              "Genesis",
              "Mandate",
              "UGC Act",
              "Logo",
              "UGC Organizational Chart",
              "UGC Bureaus",
              "UGC Offices",
              "Inter University Centers",
              "National Facilities",
              "Website Security Audit Certificate",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 px-4 py-3 border-b last:border-b-0 hover:text-orange-500 hover:bg-gray-50"
              >
                <MdArrowRightAlt />
                {item}
              </li>
            ))}
          </ul>
        </li>

        {/* Organization Mega Menu */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-1">
            <FaInfoCircle />
            <span>Organization</span>
            <MdArrowDropDown className="text-xl transition-transform group-hover:rotate-180" />
          </div>

          {/* Adjusted positioning to be more responsive than hardcoded -300px */}
          <div className="absolute top-full left-1/2 -translate-x-1/4 hidden group-hover:flex w-[800px] justify-between bg-white text-black shadow-xl border-t-2 border-orange-600 z-50 p-8 gap-8">
            {/* Column 1 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1">
                Commission
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center hover:text-orange-500 py-1">
                  <MdArrowRightAlt className="mr-2" />
                  Commission Members
                </li>
                <li className="flex items-center hover:text-orange-500 py-1">
                  <MdArrowRightAlt className="mr-2" />
                  Commission Decisions
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1">
                Leadership
              </h3>
              <ul className="space-y-2">
                {["Chairman", "Vice Chairman", "Secretary", "Financial Advisor"].map((role) => (
                  <li key={role} className="flex items-center hover:text-orange-500 py-1">
                    <MdArrowRightAlt className="mr-2" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1">
                Officers
              </h3>
              <ul className="space-y-2">
                {["Additional Secretaries", "Joint Secretaries", "Deputy Secretaries", "Education Officers", "Under Secretaries"].map((off) => (
                  <li key={off} className="flex items-center hover:text-orange-500 py-1">
                    <MdArrowRightAlt className="mr-2" />
                    {off}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        <li className="cursor-pointer hover:text-gray-200">Key Initiatives</li>
        <li className="cursor-pointer hover:text-gray-200">Guideline</li>
        <li className="cursor-pointer hover:text-gray-200">Regulation</li>

        {/* HEIs Mega Menu */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-1">
            <FaInfoCircle />
            <span>HEIs</span>
            <MdArrowDropDown className="text-xl transition-transform group-hover:rotate-180" />
          </div>

          <div className="absolute top-full left-1/2 -translate-x-3/4 hidden group-hover:flex w-[1000px] justify-between bg-white text-black shadow-2xl border-t-2 border-orange-600 z-50 p-8 gap-10">
            {/* Column 1 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1">Universities</h3>
              <ul className="space-y-2">
                {["Central Universities", "State Universities", "Deemed to be Universities", "State Private Universities", "Fake Universities"].map(u => (
                  <li key={u} className="flex items-center hover:text-orange-500 py-1">
                    <MdArrowRightAlt className="mr-2" /> {u}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1">Colleges</h3>
              <ul className="space-y-2">
                <li className="flex items-center hover:text-orange-500 py-1"><MdArrowRightAlt className="mr-2" /> Colleges (12(B)/2(f))</li>
                <li className="flex items-center hover:text-orange-500 py-1"><MdArrowRightAlt className="mr-2" /> Autonomous Colleges</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1">Institutions</h3>
              <ul className="space-y-2">
                <li className="flex items-center hover:text-orange-500 py-1"><MdArrowRightAlt className="mr-2" /> National Importance</li>
                <li className="flex items-center hover:text-orange-500 py-1"><MdArrowRightAlt className="mr-2" /> Institutions of Eminence</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-orange-500 border-b pb-1 text-xs uppercase tracking-wider">Violating Regulations</h3>
              <ul className="space-y-2 text-xs">
                {["List of Fake Universities", "HEIs not following PhD Regs", "HEIs without Ombudsperson", "Defaulter State Private Univ"].map(v => (
                  <li key={v} className="flex items-start hover:text-orange-500 py-1">
                    <MdArrowRightAlt className="mr-1 mt-1 flex-shrink-0" /> {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        <li className="cursor-pointer hover:text-gray-200">FHEI List</li>

        {/* e-Publication */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-1">
            <FaInfoCircle />
            <span>e-Publication</span>
            <MdArrowDropDown className="text-xl transition-transform group-hover:rotate-180" />
          </div>

          <ul className="absolute top-full left-0 hidden group-hover:block w-[240px] bg-white text-black shadow-lg border-t-2 border-orange-600 z-50">
            {["e-Books", "Annual Reports", "Press Release", "Archives Publications"].map(pub => (
              <li key={pub} className="flex items-center px-4 py-3 border-b hover:text-orange-500 hover:bg-gray-50">
                <MdArrowRightAlt className="mr-2" /> {pub}
              </li>
            ))}
          </ul>
        </li>

        {/* Search */}
        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
          <FaSearch />
          Search
        </li>
      </ul>
    </nav>
  );
}

export default SimpleNavbar;