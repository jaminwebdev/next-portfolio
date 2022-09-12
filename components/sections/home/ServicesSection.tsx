import { useState } from "react";
import Container from "../../Container";
import SVGSeparator from "../../SVGSeparator";
import AppIcon from "../../AppIcon";
import { AnimatePresence, motion } from "framer-motion";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../../../lib/animations";
import LinkButton from "../../buttons/LinkButton";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>("webdev");

  const handleButtonClick = (service) => {
    setActiveService(service);
  };

  const activeBtnClasses = `bg-primary-medium/100`;

  const activeBtnTextClasses = `text-white dark:text-secondary`;

  return (
    <section
      id="services"
      className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary py-44 relative">
      <SVGSeparator
        type="tilt"
        customHeight="100px"
        classNames="top tiltDownRight"
        fillClass="fill-body-color-light dark:fill-body-color-dark"
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.35fr] gap-20">
          <div className="grid gap-5">
            <h2>What Do I Do?</h2>
            <p>
              Over the last 10 years I&apos;ve had fantastic opportunities to
              work with dozens of agencies, designers, and SEO experts. Doing so
              has afforded me to wear a lot of hats. Click below to find out
              more.
            </p>
            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => handleButtonClick("webdev")}
                className={`bg-white dark:bg-body-color-dark rounded-lg grid grid-cols-[40px,1fr] gap-6 items-center py-5 px-7 hover:scale-105 transition-transform duration-200
                ${activeService === "webdev" ? activeBtnClasses : ""}`}>
                <AppIcon
                  icon="devices"
                  classNames={`${
                    activeService === "webdev"
                      ? "fill-white dark:fill-secondary"
                      : "fill-primary-dark dark:fill-white"
                  }`}
                />
                <div
                  className={` text-left ${
                    activeService === "webdev" ? activeBtnTextClasses : ""
                  }`}>
                  <h4>Web Dev</h4>
                  <p className="hidden lg:block">
                    Leveraging the latest front-end technlolgoies like Vue &
                    React.
                  </p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("seo")}
                className={`bg-white dark:bg-body-color-dark rounded-lg grid grid-cols-[40px,1fr] gap-6 items-center py-5 px-7 hover:scale-105 transition-transform duration-200
                ${activeService === "seo" ? activeBtnClasses : ""}`}>
                <AppIcon
                  icon="clipboard"
                  classNames={`${
                    activeService === "seo"
                      ? "fill-white dark:fill-secondary"
                      : "fill-primary-dark dark:fill-white"
                  } w-7`}
                />
                <div
                  className={` text-left ${
                    activeService === "seo" ? activeBtnTextClasses : ""
                  }`}>
                  <h4>SEO</h4>
                  <p className="hidden lg:block">
                    What good is a website if people can&apos;t find you?
                  </p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("design")}
                className={`bg-white dark:bg-body-color-dark rounded-lg grid grid-cols-[40px,1fr] gap-6 items-center py-5 px-7 hover:scale-105 transition-transform duration-200
                ${activeService === "design" ? activeBtnClasses : ""}`}>
                <AppIcon
                  icon="devices"
                  classNames={`${
                    activeService === "design"
                      ? "fill-white dark:fill-secondary"
                      : "fill-primary-dark dark:fill-white"
                  }`}
                />
                <div
                  className={` text-left ${
                    activeService === "design" ? activeBtnTextClasses : ""
                  }`}>
                  <h4>Design</h4>
                  <p className="hidden lg:block">
                    I&apos;ve learned from dozens of extremely talented
                    designers
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="grid items-center">
            <AnimatePresence exitBeforeEnter>
              {activeService === "webdev" ? (
                <motion.div
                  key="webdev"
                  initial={{ ...simpleFadeInitial }}
                  animate={{
                    ...simpleFadeAnimate,
                    transition: { duration: 0.2 },
                  }}
                  exit={{ ...simpleFadeExit, transition: { duration: 0.2 } }}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <h3 className="text-secondary text-3xl">&lt; 1 Sec</h3>
                      <h4>Load Times</h4>
                    </div>
                    <div className="text-center">
                      <h3 className="text-secondary text-3xl">100+</h3>
                      <h4>Sites Built</h4>
                    </div>
                    <div className="col-span-2 mt-5 grid gap-3">
                      <p>
                        Website performance has always been important, but
                        it&apos;s only getting more important as search engines,
                        end-users, and business expectations evolve - especially
                        on mobile devices. Your website can&apos;t hobble over
                        the finish line and expect to keep up with competitors.
                      </p>
                      <p>
                        <i>Over half</i> of users abandon sites that take{" "}
                        <strong>3 seconds or more</strong> to load. You
                        can&apos;t afford to <strong>not</strong> take advantage
                        of Vue or React in your next website project.
                      </p>
                      <div className="grid gap-2 mt-5">
                        <LinkButton
                          variant="ghost"
                          color="secondary"
                          origin="internal"
                          link="/">
                          My Portfolio
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}

              {activeService === "seo" ? (
                <motion.div
                  key="seo"
                  initial={{ ...simpleFadeInitial }}
                  animate={{
                    ...simpleFadeAnimate,
                    transition: { duration: 0.2 },
                  }}
                  exit={{ ...simpleFadeExit, transition: { duration: 0.2 } }}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <h3 className="text-secondary text-3xl">89%</h3>
                      <h4>Avg Traffic Increase</h4>
                    </div>
                    <div className="text-center">
                      <h3 className="text-secondary text-3xl">100+</h3>
                      <h4>Sites Audited</h4>
                    </div>
                    <div className="col-span-2 mt-5 grid gap-3">
                      <p>
                        Website performance has always been important, but
                        it&apos;s only getting more important as search engines,
                        end-users, and business expectations evolve - especially
                        on mobile devices. Your website can&apos;t hobble over
                        the finish line and expect to keep up with competitors.
                      </p>
                      <p>
                        <i>Over half</i> of users abandon sites that take{" "}
                        <strong>3 seconds or more</strong> to load. You
                        can&apos;t afford to <strong>not</strong> take advantage
                        of Vue or React in your next website project.
                      </p>
                      <div className="grid gap-2 mt-5">
                        <LinkButton
                          variant="ghost"
                          color="secondary"
                          origin="internal"
                          link="/">
                          My SEO Checklist
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}

              {activeService === "design" ? (
                <motion.div
                  key="design"
                  initial={{ ...simpleFadeInitial }}
                  animate={{
                    ...simpleFadeAnimate,
                    transition: { duration: 0.2 },
                  }}
                  exit={{ ...simpleFadeExit, transition: { duration: 0.2 } }}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <h3 className="text-secondary text-3xl">20+</h3>
                      <h4>Designs Completed</h4>
                    </div>
                    <div className="text-center">
                      <h3 className="text-secondary text-3xl">Double</h3>
                      <h4>Your Conversions</h4>
                    </div>
                    <div className="col-span-2 mt-5 grid gap-3">
                      <p>
                        Website performance has always been important, but
                        it&apos;s only getting more important as search engines,
                        end-users, and business expectations evolve - especially
                        on mobile devices. Your website can&apos;t hobble over
                        the finish line and expect to keep up with competitors.
                      </p>
                      <p>
                        <i>Over half</i> of users abandon sites that take{" "}
                        <strong>3 seconds or more</strong> to load. You
                        can&apos;t afford to <strong>not</strong> take advantage
                        of Vue or React in your next website project.
                      </p>
                      <div className="grid gap-2 mt-5">
                        <LinkButton
                          variant="ghost"
                          color="secondary"
                          origin="internal"
                          link="/">
                          My Portfolio
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </Container>
      <SVGSeparator
        type="tilt"
        customHeight="100px"
        classNames="bottom tiltDownRight"
        fillClass="fill-body-color-light dark:fill-body-color-dark"
      />
    </section>
  );
};

export default ServicesSection;
