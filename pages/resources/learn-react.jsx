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
        <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-32 lg:pb-14 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] gap-10">
              <div className="grid content-center order-2 lg:order-1">
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
              <div className="z-10 relative grid place-content-center order-1">
                <ScrollReveal bounce>
                  <div className="max-w-[200px] lg:max-w-none">
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
        <section id="reactHooks" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center text-[#61DAFB]">Hooks</h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Mastering hooks is a must, but sometimes coordinating them can be
              tricky - especially useEffect. Check out my favorite videos on
              hooks below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="Fireship"
                body="Fireship isn't just an Angular channel anymore - learn hooks in a bite sized video."
                bgImg="/images/learn-react/react-fireship-hooks.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=TNhaISOUy6Q">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="PedroTech"
                body="PedroTech's explaination of hooks is friendly and approachable."
                bgImg="/images/learn-react/react-pedro-hooks.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=LlvBzyy-558">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Jack Herrington - Hooks"
                body="Jack Herrington's breakdown of hooks here is a great way to frame the React feature."
                bgImg="/images/learn-react/react-herrington-hooks.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=56_OUG-0wgI">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Jack Herrington - useEffect"
                body="useEffect is a tricky hook to learn at first. Mr. Herrington has a great breakdown for you."
                bgImg="/images/learn-react/react-herrington-useEffect.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=lStfMBiWROQ">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Jack Herrington - Master useEffect"
                body="useEffect is so tricky, that it often requires multiple points of view."
                bgImg="/images/learn-react/react-herrington-mastering.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=dH6i3GurZW8">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Lama Dev - Common State Mistakes"
                body="Lama Dev has a great breakdown of state mistakes React newbies make."
                bgImg="/images/learn-react/react-lama-dev-common.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=Fhu5cu864ag">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Lama Dev - useEffect Mistakes"
                body="If it's not obvious by now, nailing down useEffect is vital in the wild."
                bgImg="/images/learn-react/react-lama-dev-useEffect.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=QQYeipc_cik">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Web Dev Simplified"
                body="Kyle has a great introduction to making your own custom hooks - it's that easy!"
                bgImg="/images/learn-react/react-wbs-custom.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=6ThXsUwLWvc">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Dave Gray"
                body="Dave Gray also has a great video on custom hooks."
                bgImg="/images/learn-react/react-dave-gray-custom.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=tBuceoEGFhI">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="reactState" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              State <span className="text-[#61DAFB]">Management</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              There’s an endless sea of state managemnt options in React.
              Luckily, there are plenty of comparisons out there so you can
              choose your favorite flavor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="Jack Herrington"
                body="Mr Herrington has a great in depth breakdown of 20 different state management tools."
                bgImg="/images/learn-react/react-herrington-20-state.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=P95DuIBwnqw">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Lee Robinson"
                body="The 'state' of state management in React is constantly evolving. Lee has a great overview."
                bgImg="/images/learn-react/react-lee-state.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=u_o09PD_qAs">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Hitesh Choudhary"
                body="Zustand is a great choice for a simplified state management solution."
                bgImg="/images/learn-react/react-hitesh-zustand.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=KCr-UNsM3vA">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="reactState" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              <span className="text-[#61DAFB]">Forms</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Forms are perhaps the most common and complex thing frontend
              developers interact with. React has several approaches, but I
              think React Hook Form makes it easier than most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="The Net Ninja"
                body="Net Ninja's breakdown of simple controlled inputs is fantastic."
                bgImg="/images/learn-react/react-net-ninja-forms.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=IkMND33x0qQ">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Lama Dev"
                body="Input validation and other features are a must in modern web apps."
                bgImg="/images/learn-react/react-lama-dev-forms.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=tIdNeoHniEY">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Beier Luo"
                body="React Hook Form is my preferred solution for creating forms in React."
                bgImg="/images/learn-react/react-beier-luo.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=DN8v7_RbVlc">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Pedro Tech"
                body="Pedro's breakdown of Yup validation is great."
                bgImg="/images/learn-react/react-pedro-forms.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=wlltgs5jmZw">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="reactAnimation" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              <span className="text-[#61DAFB]">Animation</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Nothing adds polish to a website or app like well executed
              animations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="Theo - ping.gg"
                body="Can't get any easier than automagic animations. "
                bgImg="/images/learn-react/react-theo.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=V8-z891_DN4">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="PedroTech"
                body="Fine tuned control with Framer Motion is also a great solution - and one that I use all the time."
                bgImg="/images/learn-react/react-pedro-animation.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=GOuwOI-WSkE">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LogRocket"
                body="There are so many solutions out there, but these top the list."
                bgImg="/images/learn-react/react-logrocket.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=KMf-Cah5B10">
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
