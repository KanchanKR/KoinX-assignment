import { useState } from "react";
import logo from "../assets/logo.svg";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:h-20 h-16 flex items-center justify-between shadow-[#1026490F]/10 shadow-md bg-[#FFFFFF] w-screen">
      <div>
        <img src={logo} alt="Logo" className="w-24 h-6 lg:ml-14 ml-4" />
      </div>
      {/* For larger screens */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Navigation Links */}
        <div className="text-[16px] font-semibold text-[#0F1629] cursor-pointer hover:text-blue-600 mr-6">
          Crypto Taxes
        </div>
        <div className="text-[16px] font-semibold text-[#0F1629] cursor-pointer hover:text-blue-600 mr-6">
          Free Tools
        </div>
        <div className="text-[16px] font-semibold text-[#0F1629] cursor-pointer hover:text-blue-600 mr-6">
          Resource Center
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-6">
          Get Started
        </button>
      </div>

      {/* For smaller screens */}
      <div className="lg:hidden mr-4">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>

      {/* Popup menu for smaller screens */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50">
          {/* Close button and Menu items */}
          <div className="flex flex-col items-start mt-6 px-4 py-2 space-y-4">
            <div className="cursor-pointer text-[16px] font-semibold text-[#0F1629] hover:text-blue-600">
              Crypto Taxes
            </div>
            <div className="cursor-pointer text-[16px] font-semibold text-[#0F1629] hover:text-blue-600">
              Free Tools
            </div>
            <div className="cursor-pointer text-[16px] font-semibold text-[#0F1629] hover:text-blue-600">
              Resource Center
            </div>

            {/* Button for Get Started */}
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] w-full px-8 py-2 text-white rounded-lg mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
