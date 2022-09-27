/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import ScrollReveal from "../../components/ScrollReveal";
import SVGSeparator from "../../components/SVGSeparator";
import AppCard from "../../components/cards/AppCard";
import LinkButton from "../../components/buttons/LinkButton";
import AppIcon from "../../components/AppIcon";

const Resources = () => {
  return (
    <>
      <Head>
        <title>My Resources</title>
        <meta
          name="description"
          content="Check out my favorite resources for learning how to be a better programmer."></meta>
      </Head>
      <main>
        <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-14 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
              <div className="grid content-center">
                <div className="pr-5 grid content-center gap-8">
                  <h1>
                    My Favorite
                    <span className="text-secondary"> Learning Resources</span>
                  </h1>
                  <h4 className="font-normal leading-relaxed">
                    Trying to figure out where to start? Try these free
                    resources.
                  </h4>
                </div>
              </div>
              <div className="z-10 relative">
                <ScrollReveal bounce>
                  <div className="hidden lg:block">
                    <Image
                      src="/images/leaning-laptop.png"
                      width={496}
                      height={480}
                      alt="laptop showcasing latest project"
                    />
                  </div>
                </ScrollReveal>
                <img
                  className="hidden lg:block -mt-6"
                  src="/images/leaning-laptop-shadow.png"
                  alt="shadow for floating laptop"
                />
                <img
                  className="absolute custom-rotate-avatar-mobile -top-[100px] right-[-135px] lg:-top-2 lg:right-5 -z-20 lg:rotate-[30deg]"
                  src="/avatars/smiling-waving.svg"
                  alt="Avatar of me smiling & waiving"
                  id="headerAvatar"
                />
              </div>
            </div>
          </Container>
          <SVGSeparator
            type="tilt"
            classNames="bottom tiltDownLeft"
            customHeight="100px"
          />
        </header>
        <section className="pt-24 pb-12">
          <Container>
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AppCard
                  heading="Learn JavaScript"
                  body="Before you hop into a framework, you should be well versed in JS."
                  bgImg="/images/learn-js.jpg"
                  btns={
                    <LinkButton
                      origin="internal"
                      link="/resources/learn-javascript">
                      View
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  }></AppCard>
                <AppCard
                  heading="Learn React"
                  body="React's simple but powerful UI library is very powerful."
                  bgImg="/images/learn-react.jpg"
                  btns={
                    <LinkButton origin="internal" link="/resources/learn-react">
                      View
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  }></AppCard>
                <AppCard
                  heading="Learn Vue"
                  body="Vue's opinionated yet flexible framework is a dream in most developers' eyes."
                  bgImg="/images/learn-vue.jpg"
                  btns={
                    <LinkButton origin="internal" link="/resources/learn-vue">
                      View
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  }></AppCard>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Resources;
