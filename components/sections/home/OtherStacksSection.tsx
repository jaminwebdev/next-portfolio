import Container from "../../Container";
import SVGSeparator from "../../SVGSeparator";

const OtherStacksSection = () => {
  return (
    <section className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary relative py-36 mb-4">
      <SVGSeparator type="waves" classNames="top" customHeight="75px" />
      <Container>
        <h2 className="text-center">
          More <span className="text-secondary">Stacks</span> I 💖
        </h2>
      </Container>
      <SVGSeparator type="waves" classNames="bottom" customHeight="75px" />
    </section>
  );
};

export default OtherStacksSection;
