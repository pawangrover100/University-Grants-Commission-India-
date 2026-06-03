import AddSection from "../AddSection/AddSection";
import Dropdownlist from "../Dropdown/Dropdownlist";
import EGovernance from "../E-Governance @UGC Section/EGovernance";
import MainSection from "../MainSection/MainSection";
import Navbar from "../Navbar/Navbar";
import CustomSlider from "../Slider/CustomSlider";

function Home() {
  return (
    <>
      <Navbar />
      <Dropdownlist/>
      <CustomSlider />
      <AddSection/>
      <MainSection/>
      <EGovernance/>
    </>
  );
}

export default Home;
