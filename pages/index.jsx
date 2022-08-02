import ActionButton from "../components/buttons/ActionButton.tsx";
import LinkButton from "../components/buttons/LinkButton.tsx";
import LazyLoad from "../components/LazyLoad";
import AppLink from "../components/AppLink";

export default function Home() {
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
      <div className="min-h-screen bg-body-color-light-secondary dark:bg-body-color-dark-secondary">
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
            variant="ghost"
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
          <ActionButton callback={consoleTheLog}>Howdy</ActionButton>
        </div>
        <div className="flex space-x-4 justify-center">
          <LinkButton
            variant="ghost"
            color="secondary"
            link="/"
            origin="external">
            Howdy <span>things</span>
          </LinkButton>
          <LinkButton variant="ghost" color="secondary" link="/">
            Howdy
          </LinkButton>
          <LinkButton link="/">Howdy</LinkButton>
        </div>
      </div>
      <div className="max-w-md mx-auto">
        <LazyLoad>
          <img src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg" />
        </LazyLoad>
      </div>
    </div>
  );
}
