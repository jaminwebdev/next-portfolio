import LinkButton from "../../buttons/LinkButton";
import OverlapCard from "../../cards/OverlapCard";
import Container from "../../Container";
import AppIcon from "../../AppIcon";

const PortfolioSection = () => {
  return (
    <section id="portfolioSection" className="py-24">
      <Container>
        <h2 className="text-center text-5xl mb-10">
          My <span className="text-secondary">Portfolio</span>
        </h2>
        <OverlapCard
          icons={["vue", "node", "postgres"]}
          iconLinks={[
            "https://vue.com",
            "https://node.com",
            "https://postgres.com",
          ]}
          tagIcon="github"
          tagLink="https://github.com"
          heading="Example Project"
          body="Lorem ipsum dolor sit amet, word and some adipiscing elit. Lorem ipsum dolor sit amet, word and some adipiscing elit."
          btns={getFeaturedButtons()}
          bgImg="https://i.imgur.com/WNmG3Q6.jpg"
        />
      </Container>
    </section>
  );
};

export default PortfolioSection;

const getFeaturedButtons = () => {
  return (
    <>
      <LinkButton
        variant="primary"
        color="primary"
        origin="external"
        link="/"
        classNames="dark:bg-secondary">
        Details
        <AppIcon icon="clipboard" classNames="w-4 ml-2 fill-white" />
      </LinkButton>
      <LinkButton variant="ghost" color="secondary" origin="internal" link="/">
        See Project
        <AppIcon icon="eyes" classNames="w-4 ml-2 fill-secondary" />
      </LinkButton>
    </>
  );
};
