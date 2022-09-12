/* eslint-disable @next/next/no-img-element */
import HomepageHeader from "../components/sections/home/HomepageHeader";
import PortfolioSection from "../components/sections/home/PortfolioSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import FavoriteStackSection from "../components/sections/home/FavoriteStackSection";
import OtherStacksSection from "../components/sections/home/OtherStacksSection";

const Home = () => {
  return (
    <main>
      <HomepageHeader />
      <PortfolioSection />
      <ServicesSection />
      <FavoriteStackSection />
      <OtherStacksSection />
    </main>
  );
};

export default Home;
