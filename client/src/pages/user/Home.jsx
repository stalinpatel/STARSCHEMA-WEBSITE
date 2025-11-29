import HeroSection from "../../components/user/Home/HeroSection";
import StatsSection from "../../components/user/Home/StatsSection";
import WhyStarSchema from "../../components/user/Home/WhyStarschema";
import Courses from "./Courses";

function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyStarSchema />
      <Courses limit={6} />
    </>
  );
}

export default Home;
