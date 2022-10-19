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
  learnVueChannels,
  sortChannelsAlphabetically,
} from "../../lib/ytChannels";

const ytChannels = sortChannelsAlphabetically(learnVueChannels);

const LearnVue = () => {
  return (
    <>
      <Head>
        <title>Learn Vue: Free Tutorials and Videos | HeBuildsWebsites</title>
        <meta
          name="description"
          content="These free resources are the best places to start learning Vue"></meta>
      </Head>
      <main>
        <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-32 lg:pb-14 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] gap-10">
              <div className="grid content-center order-2 lg:order-1">
                <div className="pr-5 grid content-center gap-8">
                  <h1>
                    Learn <br></br>
                    <span className="text-[#41B883]"> Vue JS</span>
                  </h1>
                  <h4 className="font-normal leading-relaxed">
                    Don’t know where to start learning VueJS? Check out my
                    favorite resources
                  </h4>
                </div>
              </div>
              <div className="z-10 relative grid place-content-center order-1">
                <ScrollReveal bounce>
                  <div className="max-w-[150px] lg:max-w-none">
                    <Image
                      src="/images/learn-vue-heading.png"
                      width={183}
                      height={158}
                      alt="JavaScript Logo"
                    />
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
        <section id="vueBasics" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              The <span className="text-[#41B883]">Basics</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Vue has long been touted as the developer’s favorite framework. I
              personally enjoy it for it’s opinionated flexibility. Here are my
              go-to resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="Vue Docs"
                body="Vue's documentation is fantastic with tons of snippets and clearly explained features."
                bgImg="/images/learn-vue/vue-docs.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://vuejs.org/guide/introduction.html">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue.co"
                body="I LOVE this vue resource - both the website and the YouTube channel. You're going to see it a lot here."
                bgImg="/images/learn-vue/vue-learn-vue-docs.jpg"
                btns={
                  <>
                    <LinkButton origin="external" link="https://learnvue.co/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                    <LinkButton
                      origin="external"
                      variant="ghost"
                      link="https://www.youtube.com/c/LearnVue">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-secondary" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Vue Mastery"
                body="This resource is also very popular and has well thought out diagrams."
                bgImg="/images/learn-vue/vue-vue-mastery.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.vuemastery.com/courses">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="freeCodeCamp"
                body="freeCodeCamp really covers it all when it comes to JS frameworks."
                bgImg="/images/learn-vue/vue-fcc-basics.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=FXpIoQ_rT_c">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="The Net Ninja"
                body="The Net Ninja has fantastic tutorials on all things JS as well."
                bgImg="/images/learn-vue/vue-net-ninja.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=1">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Vue Mastery - YT"
                body="Vue Mastery also has a great intro on YouTube"
                bgImg="/images/learn-vue/vue-mastery-yt.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=bzlFvd0b65c">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue - First Vue 3 App"
                body="Learn by doing with the fantastic LearnVue channel."
                bgImg="/images/learn-vue/vue-learn-vue-basics.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=JLt3GrDZDvQ">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue - Refs Simplified"
                body="LearnVue's breakdown of refs makes it extremely approachable."
                bgImg="/images/learn-vue/vue-learn-vue-refs.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=Z6iBAixVJ5Y">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue - Lifecycle"
                body="As with any framework, you should know the component lifecycle methods."
                bgImg="/images/learn-vue/vue-learn-vue-lifecycle.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=xefB0ndqK0Y">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue - Script Setup"
                body="Vue 3's script setup is phenomenal and really cleans up your components."
                bgImg="/images/learn-vue/vue-learn-vue-setup.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=77yGP5K_Lt8">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue - Context"
                body="Having a grasp on how/when to use Vue's context is also a must for most projects."
                bgImg="/images/learn-vue/vue-learn-vue-context.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=1Ri1x-gRkbs">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="vueForms" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              Vue <span className="text-[#41B883]">Forms</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Forms can be tricky, but they don’t have to be. Vue makes a lot of
              form functionality easy - even easier with something like FormKit
              or Vue Formulate
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="FormKit"
                body="This form library makes structure, validation, and error handling a breeze."
                bgImg="/images/learn-vue/vue-formkit.jpg"
                btns={
                  <>
                    <LinkButton origin="external" link="https://formkit.com/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="John Komarnicki"
                body="If you want a more manual approach, this tutorial can get you going."
                bgImg="/images/learn-vue/vue-john.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=TlDy9cZQpC0">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="The Net Ninja"
                body="The Net Ninja also has a great series covering more manual form creation in Vue."
                bgImg="/images/learn-vue/vue-net-ninja.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=ixOcve5PX-Q">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="vueAnimations" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              Vue <span className="text-[#41B883]">Animations</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Vue has nice animation animations built in, but there are also
              great libraries that make it even easier.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="Vue Docs"
                body="As always, start with the basics."
                bgImg="/images/learn-vue/vue-docs.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://vuejs.org/guide/extras/animation.html">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="The Net Ninja"
                body="The Net Ninja strikes again with some well explained animation basics."
                bgImg="/images/learn-vue/vue-net-ninja-animation.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ghm7-iTfS9n468Kp7l9Ipu">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue"
                body="LearnVue delivers again with some animation library options in Vue."
                bgImg="/images/learn-vue/vue-learn-vue-animation.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=7HDiV-yaquQ">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Diligent Dev"
                body="There are many options and approaches to consdier with Vue animations."
                bgImg="/images/learn-vue/vue-diligent-dev-animation.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=H4Qsm01YKTY">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="AutoAnimate"
                body="What's better than automatic animations in a pinch? Thanks Formkit."
                bgImg="/images/learn-vue/vue-auto-animate.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://auto-animate.formkit.com/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="vueState" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              State <span className="text-[#41B883]">Management</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Unlike React, Vue’s state management is far simpler. There are a
              couple different flavors, but Pinia looks like it’s preferred by
              most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="Vuex"
                body="Vuex was/is the Vue Team's maintained state management option from the beginning."
                bgImg="/images/learn-vue/vue-vuex-docs.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://vuex.vuejs.org/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Pinia"
                body="It's looking like Pinia is becoming the more popular state management solution."
                bgImg="/images/learn-vue/vue-pinia.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://pinia.vuejs.org/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Make Apps with Danny"
                body="This is a great (and quick) intro to Pinia."
                bgImg="/images/learn-vue/vue-make-apps-danny.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=nFh7-HfODYY">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="LearnVue"
                body="Once again, LearnVue's bite sized breakdown is a fantastic refresher."
                bgImg="/images/learn-vue/vue-learn-vue-pinia.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=LfWpPRId5N0">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Tyler Potts"
                body="For another perspective on Pinia, this video was helpful when I first started."
                bgImg="/images/learn-vue/vue-tyler-potts-pinia.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      variant="primary"
                      link="https://www.youtube.com/watch?v=3zI5MhFFPMA">
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
              My Favorite Vue <br></br>
              <span className="text-[#41B883]">YouTube Channels</span>
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

export default LearnVue;
