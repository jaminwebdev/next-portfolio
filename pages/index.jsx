/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import HomepageHeader from "../components/sections/home/HomepageHeader";
import PortfolioSection from "../components/sections/home/PortfolioSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import FavoriteStackSection from "../components/sections/home/FavoriteStackSection";
import OtherStacksSection from "../components/sections/home/OtherStacksSection";
import OtherTechSection from "../components/sections/home/OtherTechSection";
import LearnResourcesSection from "../components/sections/home/LearnResourcesSection";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <>
      <Head>
        <title>He Builds Websites | Modern and Fast Websites</title>
        <meta
          name="description"
          content="Building the fastest websites with the fastest technologies."></meta>
        <link rel="canonical" href="https://hebuildswebsites.com" />
      </Head>
      <main>
        <HomepageHeader />
        <PortfolioSection />
        <ServicesSection />
        <FavoriteStackSection />
        <OtherStacksSection />
        <OtherTechSection />
        <LearnResourcesSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;
