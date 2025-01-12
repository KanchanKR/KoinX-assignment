import { FaArrowRight } from "react-icons/fa";
import promoimg from "../assets/promoimg.png";

const CradsPromo = () => {
  return (
    <div className="mt-4 bg-[#0052FE] text-white w-[426px] h-[515px] rounded-2xl px-10 py-8 text-center">
      <div>
        <div className="font-inter font-bold text-[24px] leading-[40px] text-center">
          Get Started with KoinX for FREE
        </div>
        <div className="font-inter font-medium text-[14px] leading-[24px] text-center mt-4">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <img src={promoimg} alt="Promo" className="w-[178.66px] h-[166.22px]" />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-8 bg-white text-[#0F1629] rounded-xl py-3 w-[237px] text-center cursor-pointer">
          <button className="font-inter font-semibold text-[16px] leading-[28px]">
            Get Started for FREE
          </button>

          <div className="ml-4 mt-1">
            <FaArrowRight className="font-thin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CradsPromo;
