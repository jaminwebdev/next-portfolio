import ActionButton from "../buttons/ActionButton";
import AppIcon from "../AppIcon";
import Container from "../Container";
import Image from "next/image";

const CTASection = () => {
  return (
    <section id="ctaSection">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 px-10 rounded-3xl bg-body-color-light-secondary dark:bg-body-color-dark-secondary items-center relative mb-10">
          <div>
            <h2>Let&apos;s Chat</h2>
            <p className="my-5">
              Drop me a line and let&apos;s make something happen!
            </p>
          </div>
          <div className="grid lg:justify-center z-10">
            <div>
              <ActionButton
                type="button"
                color="secondary"
                variant="primary"
                callback={() => console.log("clicked")}
                classNames="py-3">
                Let&apos;s Do This!
                <AppIcon icon="chat" classNames="w-5 stroke-white ml-2" />
              </ActionButton>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-[73px] md:right-6 md:-bottom-[6px] scale-50 md:scale-100">
            <Image
              src="/avatars/casual-talkative.svg"
              alt="Avatar of Jamin smiling"
              width={252}
              height={270}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
