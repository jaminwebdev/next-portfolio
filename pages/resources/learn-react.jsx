/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import ScrollReveal from "../../components/ScrollReveal";
import SVGSeparator from "../../components/SVGSeparator";
import AppCard from "../../components/cards/AppCard";
import LinkButton from "../../components/buttons/LinkButton";
import AppIcon from "../../components/AppIcon";
import ThumbnailCard from "../../components/cards/ThumbnailCard";
import {
  learnReactChannels,
  sortChannelsAlphabetically,
} from "../../lib/ytChannels";
import Lottie from "../../components/Lottie";
import * as ReactLottie from "../../lib/lottie/react-lottie.json";

const ytChannels = sortChannelsAlphabetically(learnReactChannels);

const LearnReact = () => {
  return (
    <>
      <Head>
        <title>Learn React: Free Tutorials and Videos | HeBuildsWebsites</title>
        <meta
          name="description"
          content="These free resources are the best places to start learning React"></meta>
      </Head>
      <main>
        <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-14 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
              <div className="grid content-center">
                <div className="pr-5 grid content-center gap-8">
                  <h1>
                    Learn <br></br>
                    <span className="text-[#61DAFB]"> React JS</span>
                  </h1>
                  <h4 className="font-normal leading-relaxed">
                    These are <em>the</em> best free resources for learning
                    React.
                  </h4>
                </div>
              </div>
              <div className="z-10 relative grid place-content-center">
                <ScrollReveal bounce>
                  <div className="hidden lg:block">
                    <Lottie animationData={ReactLottie} width="200px" loop />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>
          <SVGSeparator
            type="tilt"
            classNames="bottom tiltDownLeft"
            customHeight="100px"
          />
        </header>
        <section id="reactBasics" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              The <span className="text-[#61DAFB]">Basics</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              If you’re comfortable with the basics of JavaScript, you should
              feel right at home with React’s simple UI library.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="React Docs"
                body="Often touted as the best place to start (well deserved), you'll walk away with a strong foundation."
                bgImg="/images/learn-react/react-docs.jpg"
                btns={
                  <>
                    <LinkButton origin="external" link="https://reactjs.org/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="freeCodeCamp"
                body="If you're learning any JS framework, you might as well bookmark all things FCC."
                bgImg="/images/learn-react/react-fcc-basics.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=bMknfKXIFA8">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Traversy Media"
                body="Traversy Media is a great resource for concise intros to all sorts of web techonlogies."
                bgImg="/images/learn-react/react-traversy.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Dave Gray"
                body="Dave Gray's channels is full of React insights - from basic to advanced."
                bgImg="/images/learn-react/react-dave-gray.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=RVFAyFWO4go">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Net Ninja"
                body="The Net Ninja has you covered when it comes to all things web technology."
                bgImg="/images/learn-react/react-net-ninja-basics.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>

        <section id="favYtChannels" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              My Favorite React <br></br>
              <span className="text-[#61DAFB]">YouTube Channels</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {ytChannels.map((channel) => (
                <ThumbnailCard
                  key={channel.heading}
                  img={channel.img}
                  link={channel.link}
                  heading={channel.heading}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default LearnReact;
