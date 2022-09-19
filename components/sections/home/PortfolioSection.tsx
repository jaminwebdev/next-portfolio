import OverlapCard from "../../cards/OverlapCard";
import AppCard from "../../cards/AppCard";
import Container from "../../Container";
import { featuredPortfolio, portfolioItems } from "../../../lib/portfolio";

const PortfolioSection = () => {
  return (
    <section id="portfolioSection" className="py-24">
      <Container>
        <h2 className="text-center mb-12">
          My <span className="text-secondary">Portfolio</span>
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div id="featuredPortfolio" className="col-span-full">
            <div className="hidden lg:block">
              <OverlapCard {...featuredPortfolio} />
            </div>
            <div className="block lg:hidden">
              <AppCard {...featuredPortfolio} />
            </div>
          </div>
          <div className="grid lg:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
            {portfolioItems.map((portfolio) => (
              <AppCard {...portfolio} key={portfolio.heading} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
