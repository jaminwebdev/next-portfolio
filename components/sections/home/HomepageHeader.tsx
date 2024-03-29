/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import Container from "../../../components/Container";
import ActionButton from "../../../components/buttons/ActionButton";
import AppIcon from "../../../components/AppIcon";
import ConnectForm from "../../../components/forms/connect/ConnectForm";
import SVGSeparator from "../../../components/SVGSeparator";
import ScrollReveal from "../../../components/ScrollReveal";

const HomepageHeader = () => {
  let [headerFormVisible, setHeaderFormVisible] = useState(false);

  const toggleHeaderForm = () => {
    setHeaderFormVisible(
      (oldVisibility) => (headerFormVisible = !oldVisibility)
    );
  };

  return (
    <header
      id="homepageHero"
      className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-14 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
          <div className="grid content-center">
            {headerFormVisible ? (
              <div className="pb-10">
                <ConnectForm />
              </div>
            ) : (
              <div className="pr-5 grid content-center gap-8">
                <h1 className="leading-tight">
                  Hi, I&apos;m Jamin <br></br> I&apos;m a
                  <span className="text-secondary"> Front End</span> Engineer.
                </h1>
                <h4 className="font-normal leading-relaxed">
                  I build incredibly fast websites and apps with tools like
                  Astro, Vue & Nuxt JS, React & Next JS, Angular, and Node.
                </h4>
                <ActionButton
                  color="primary"
                  type="button"
                  variant="primary"
                  classNames="justify-self-start py-4 px-11 text-lg dark:bg-secondary"
                  callback={toggleHeaderForm}>
                  Let&apos;s Work Together
                  <AppIcon icon="chat" classNames="w-5 ml-2 stroke-white" />
                </ActionButton>
              </div>
            )}
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
  );
};

export default HomepageHeader;
