import About from "../components/About";
import CradsPromo from "../components/CradsPromo";
import Crypto from "../components/Crypto";
import PageHolder from "../components/PageHolder";
import PerformanceSection from "../components/PerformanceSection";
import SentimentSection from "../components/SentimentSection";
import ToggleSection from "../components/ToggleSection";
import Tokenomics from "../components/Tokenomics";
import TrendingCoins from "../components/TrendingCoins";
import Team from "../components/TeamCard";
import SuggestionSection from "../components/SuggestionSection";

const CoinPage = () => {
  return (
    <div className="h-full w-full bg-slate-200/40">
      <PageHolder />

      <div className="w-full lg:flex lg:space-x-8 px-4 py-6">
        {/* Main Content Section */}
        <div className="lg:w-8/12 w-full mb-6 lg:mb-0">
          <Crypto />
          <ToggleSection />
          <PerformanceSection />
          <SentimentSection />
          <About />
          <Tokenomics />
          <Team />
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-4/12 w-full">
          <CradsPromo />
          <TrendingCoins />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-6">
        <SuggestionSection />
      </div>
    </div>
  );
};

export default CoinPage;
