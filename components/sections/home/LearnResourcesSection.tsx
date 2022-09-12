import Container from "../../Container";
import Image from "next/image";
import SVGSeparator from "../../SVGSeparator";
import LinkButton from "../../buttons/LinkButton";
import AppIcon from "../../AppIcon";
import ScrollReveal from "../../ScrollReveal";

const LearnResourcesSection = () => {
  return (
    <section className="py-36 bg-body-color-light-secondary dark:bg-body-color-dark-secondary relative mb-4">
      <SVGSeparator
        type="tilt"
        classNames="top tiltDownRight"
        customHeight="80px"
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
          <div className="pr-0 lg:pr-20 grid justify-items-start">
            <h2 className="mb-5">
              Check Out <span className="text-secondary">My Resources</span>!
            </h2>
            <p>
              As I&apos;ve learned more about all the different fun toys at our
              disposal as front-end developers, I&apos;ve kept track of
              documentation, articles, code-alongs, and YouTube channels that
              helped solidify important concepts. Everything from JS basics like
              closure and desig patterns, to the basics of all your favorite
              framworks.
            </p>
            <p className="mt-3 mb-5">
              Best of all, most of these items are 100% free. I&apos;ve only
              included platforms with affordable subscriptions like Udemy or
              Frontend Masters because I think they&apos;re well worth the price
              of admission.
            </p>
            <LinkButton
              variant="primary"
              color="secondary"
              origin="internal"
              link="/">
              Start Learning!
              <AppIcon icon="arrowRight" classNames="w-3 fill-white ml-2" />
            </LinkButton>
          </div>
          <div className="row-start-1 lg:row-start-auto grid justify-center">
            <ScrollReveal bounce>
              <Image
                src="/avatars/working-laptop.svg"
                alt="Illustration of man working at laptop"
                width={350}
                height={333}
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
      <SVGSeparator
        type="tilt"
        classNames="bottom tiltDownRight"
        customHeight="80px"
      />
    </section>
  );
};

export default LearnResourcesSection;
