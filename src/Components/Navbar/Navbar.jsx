import { FaHome, FaArrowDown, FaVolumeUp, FaSearch } from "react-icons/fa";
import { MdOutlineTextDecrease, MdOutlineTextIncrease } from "react-icons/md";
import ugc_logo from '../../assets/ugc_logo.png'
import G20_India_Logo from '../../assets/G20_India_Logo.png'

function Navbar() {
  return (
    <>
      {/* Top Bar (Dark Section) */}
      <div className="w-full bg-[#3d344b] h-[35px] border-b border-gray-600">
        <div className="max-w-[1150px] h-full flex justify-center items-center mx-auto px-4">
          <ul className="flex items-center gap-x-4 text-white text-xs lg:text-sm">
            <li>
              <a href="#" className="hover:text-orange-400 border-r border-gray-500 pr-3 block">
                <FaHome size={16}/>
              </a>
            </li>

            <li className="hidden md:block">
              <a href="#" className="flex items-center gap-x-2 hover:text-orange-400 border-r border-gray-500 pr-3">
                <FaArrowDown size={12}/>
                <span>Skip to main content</span>
              </a>
            </li>

            <li className="hidden md:block">
              <a href="#" className="flex items-center gap-x-2 hover:text-orange-400 border-r border-gray-500 pr-3">
                <FaArrowDown size={12}/>
                <span>Skip to Navigation</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-x-2 hover:text-orange-400 border-r border-gray-500 pr-3">
                <FaVolumeUp />
                <span>Screen Reader</span>
              </a>
            </li>

            <li>
              <div className="flex items-center gap-x-2 border-r border-gray-500 pr-3">
                <span className="hover:text-orange-400 cursor-pointer">Text</span>
                <div className="flex items-center gap-x-1">
                  <MdOutlineTextDecrease className="hover:text-orange-400 cursor-pointer" />
                  <span className="text-[15px] hover:text-orange-400 cursor-pointer font-bold">A</span>
                  <MdOutlineTextIncrease className="hover:text-orange-400 cursor-pointer" />
                </div>
                <span className="hover:text-orange-400 cursor-pointer ml-2">Hindi</span>
              </div>
            </li>

            <li className="hidden sm:block"><a href="#" className="hover:text-orange-400 border-r border-gray-500 pr-3">Contact us</a></li>
            <li className="hidden sm:block"><a href="#" className="hover:text-orange-400 border-r border-gray-500 pr-3">FAQs</a></li>
            <li className="hidden sm:block"><a href="#" className="hover:text-orange-400 border-r border-gray-500 pr-3">Tenders</a></li>

            <li>
              <a href="#" className="hover:text-orange-400">
                <FaSearch />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Logo Section */}
      <div className="w-full bg-white  py-2">
        <div className="max-w-[1140px] mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src={ugc_logo} alt="UGC Logo" className="h-16 md:h-20 object-contain" />
          </div>
          <div className="flex items-center">
            <img src={G20_India_Logo} alt="G20 Logo" className="h-16 md:h-20 object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;