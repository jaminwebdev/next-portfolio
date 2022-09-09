import ActionButton from "../components/buttons/ActionButton";
import LinkButton from "../components/buttons/LinkButton";
import ScrollReveal from "../components/ScrollReveal";
import AppLink from "../components/AppLink";
import AppIcon from "../components/AppIcon";
import ConnectForm from "../components/forms/connect/ConnectForm";
import Image from "next/image";
import SVGSeparator from "../components/SVGSeparator";

const Showcase = () => {
  const consoleTheLog = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h1 className="text-7xl font-black">
        Hello <span className="text-secondary">Worlds!</span>
      </h1>
      <div className="flex space-x-5 w-full justify-center">
        <p>Blah blah blah and a blah blah</p>
      </div>
      <div className="py-20 bg-body-color-light-secondary dark:bg-body-color-dark-secondary relative">
        <SVGSeparator type="waves" classNames="top" />
        <h1>Primary Heading</h1>
        <h2>Secondary Heading</h2>
        <h3>Tertiary Heading</h3>
        <h4>Another Heading</h4>
        <div className="flex flex-wrap space-x-5 my-6 w-full justify-center">
          <AppLink link="/about/james">James Page</AppLink>
          <AppLink link="/about/james">James Page</AppLink>
          <AppLink link="/about/james">James Page</AppLink>
        </div>
        <div className="flex space-x-4 justify-center">
          <ActionButton
            variant="primary"
            color="secondary"
            callback={consoleTheLog}>
            Howdy
          </ActionButton>
          <ActionButton
            variant="ghost"
            color="secondary"
            callback={consoleTheLog}>
            Howdy
          </ActionButton>
          <ActionButton variant="outlined" callback={consoleTheLog}>
            Howdy
          </ActionButton>
        </div>
        <div className="flex space-x-4 justify-center">
          <LinkButton
            variant="primary"
            color="secondary"
            link="/"
            origin="external">
            Primary
            <AppIcon icon="linkedin" classNames="w-4 fill-white" />
          </LinkButton>
          <LinkButton variant="ghost" color="secondary" link="/">
            Ghost
            <AppIcon icon="eyes" classNames="w-7 fill-secondary" />
          </LinkButton>
          <LinkButton link="/" variant="outlined">
            <AppIcon
              icon="paperPlane"
              classNames="w-4 stroke-secondary group-hover:stroke-white"
            />
            Outlined
          </LinkButton>
        </div>
        <SVGSeparator type="waves" classNames="bottom" customHeight={"150px"} />
      </div>
      <div className="p-20 max-w-4xl mx-auto bg-body-color-light-secondary dark:bg-body-color-dark-secondary">
        <ConnectForm />
      </div>
      <div className="max-w-md mx-auto">
        <ScrollReveal>
          <Image
            src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg"
            width={400}
            height={400}
            quality={20}
            alt="Placeholder image"
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Showcase;
