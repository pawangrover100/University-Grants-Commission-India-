import { FaHome, FaArrowDown, FaVolumeUp, FaSearch } from "react-icons/fa";
import { MdOutlineTextDecrease, MdOutlineTextIncrease } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="max-w-full bg-[#3d344b] h-[30px] border-2 border-solid">
        <div className="w-[1150px] h-full flex justify-center items-center mx-auto">
          <ul className="flex items-center gap-x-4 text-white text-sm">
            <li>
              <a
                href="#"
                className="flex items-center gap-x-2 hover:text-orange-400 border-r pr-3"
              >
                <FaHome />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-x-2 hover:text-orange-400 border-r pr-3"
              >
                <FaArrowDown />
                <h6>Skip to main content</h6>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-x-2 hover:text-orange-400 border-r pr-3"
              >
                <FaArrowDown />
                <h6>Skip to Navigation</h6>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-x-2 hover:text-orange-400 border-r pr-3"
              >
                <FaVolumeUp />
                <h6>Screen Reader</h6>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-x-2 border-r pr-3"
              >
                <h6 className=" hover:text-orange-400">Text</h6>

                <div className="flex items-center gap-x-2 ">
                  <MdOutlineTextDecrease className=" hover:text-orange-400" />
                  <div className="text-[15px]  hover:text-orange-400">A</div>
                  <MdOutlineTextIncrease className=" hover:text-orange-400"/>
                </div>

                <h6 className=" hover:text-orange-400">Hindi</h6>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400 border-r pr-3">
                Contact us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400 border-r pr-3">
                FAQs
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400 border-r pr-3">
                e-Procurement
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400 border-r pr-3">
                Tenders
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400 border-r pr-3">
                Job
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-orange-400">
                <FaSearch />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
