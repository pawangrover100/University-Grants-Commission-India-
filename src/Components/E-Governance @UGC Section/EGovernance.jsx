import React from 'react';
// Assets imports
import UGCEquivalence from "../../assets/7032830_UGC_Equivalence.jpg";
import PhD_Citation_Portal from "../../assets/PhD_Citation_Portal.jpg";
import Fhei_logo from "../../assets/fhei_logo.png";
import mmmc from "../../assets/mmmc.png";
import Autonomous_Portal from "../../assets/Autonomous_Portal.png";
import UTSAH from "../../assets/UTSAH.jpg";
import PoP_Portal from "../../assets/PoP_Portal.jpg";
import saksham from "../../assets/saksham.png";
import Cu_Portal from "../../assets/cu_portal.jpg";
import Dtbump from "../../assets/dtbump.png";
import ugc1 from "../../assets/ugc_logo (1).png";
import ugc2 from "../../assets/ugc_logo (2).png";
import DEB from "../../assets/DEB.jpg";
import logo_1 from "../../assets/logo-1.jpg";
import NaM from "../../assets/NAD.jpg";
import UGC_NET from "../../assets/UGC_NET.gif";

const profileCard = [
  { id: 1, icon: UGCEquivalence, title: "UGC Equivalence Portal" },
  { id: 2, icon: PhD_Citation_Portal, title: "UGC Ph.D. Excellence Citation Portal" },
  { id: 3, icon: Fhei_logo, title: "UGC FHEI" },
  { id: 4, icon: mmmc, title: "Malviya Mission" },
  { id: 5, icon: Autonomous_Portal, title: "Autonomous Portal" },
  { id: 6, icon: UTSAH, title: "UTSAH Portal" },
  { id: 7, icon: PoP_Portal, title: "Professor of Practice Portal" },
  { id: 8, icon: saksham, title: "e-Samadhaan portal" },
  { id: 9, icon: Cu_Portal, title: "CU-Chayan Portal" },
  { id: 10, icon: Dtbump, title: "Distance Education Bureau (DEB)" },
  { id: 11, icon: ugc1, title: "UGC Scholarship Portal" },
  { id: 12, icon: ugc2, title: "e-Schemes Portal" },
  { id: 13, icon: DEB, title: "UGC-DEB Portal" },
  { id: 14, icon: logo_1, title: "National Academic Depository" },
  { id: 15, icon: NaM, title: "NAD/ABC Portal" },
  { id: 16, icon: UGC_NET, title: "UGC-NET Portal" },
];

function EGovernance() {
  return (
    <div className="bg-[#f3f4f6] py-12 px-4 md:px-10 min-h-screen">
      {/* Container jo saare cards ko hold karega */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {profileCard.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
          >
            {/* Image Section */}
            <div className="w-full h-32 flex items-center justify-center mb-6">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Divider (Optional, subtle design enhancement) */}
            <div className="w-full h-[1px] bg-gray-50 mb-4"></div>

            {/* Text Section */}
            <h3 className="text-[#374151] font-bold text-center text-lg md:text-base lg:text-lg leading-tight px-2">
              {item.title}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}

export default EGovernance;