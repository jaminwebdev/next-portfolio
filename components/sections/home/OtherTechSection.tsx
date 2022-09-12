/* eslint-disable @next/next/no-img-element */

import Container from "../../Container";

const OtherTechSection = () => {
  return (
    <section id="otherTech" className="py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="pr-0 lg:pr-20">
            <h2 className="mb-8">
              What Else <span className="text-secondary">Do I Know</span>?
            </h2>
            <p className="mb-4">
              I&apos;m a big fan of constantly learning new technologies and
              goodies to add to my stack. Here’s a list of items I&apos;m also
              intimately familiar with, or continually learning more about.
            </p>
            <p>Click on any of the icons to learn more.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-4 gap-y-10">
            <a
              href="https://react.com"
              className="p-2 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img
                className="w-16"
                src="/icons/icon-react.svg"
                alt="React logo"
              />
            </a>
            <a
              href="https://vue.com"
              className="p-2 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img className="w-16" src="/icons/icon-vue.svg" alt="Vue logo" />
            </a>
            <a
              href="https://svelte.com"
              className="p-2 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img
                className="w-14"
                src="/icons/icon-svelte.svg"
                alt="Svelte logo"
              />
            </a>
            <a
              href="https://solid.com"
              className="p-2 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img
                className="w-16"
                src="/icons/icon-solidjs.svg"
                alt="SolidJS logo"
              />
            </a>
            <a
              href="https://typescript.com"
              className="p-2 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img
                className="w-16"
                src="/icons/icon-ts.svg"
                alt="TypeScript logo"
              />
            </a>
            <a
              href="https://sass.com"
              className="p-2 rounded-full grid place-content-center hover:scale-110 transition-all ease duration-200">
              <img
                className="w-16"
                src="/icons/icon-sass.svg"
                alt="Sass logo"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OtherTechSection;
