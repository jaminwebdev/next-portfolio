/* eslint-disable @next/next/no-img-element */
import Container from "../../Container";
import SVGSeparator from "../../SVGSeparator";

const OtherStacksSection = () => {
  return (
    <section className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary relative py-40 mb-4">
      <SVGSeparator type="waves" classNames="top" customHeight="75px" />
      <Container>
        <h2 className="text-center mb-10">
          More <span className="text-secondary">Stacks</span> I 💖
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-body-color-light dark:bg-body-color-dark py-14 px-16">
            <div className="flex justify-center gap-3 mb-9">
              <a
                href="https://nuxt.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12"
                  src="/icons/icon-nuxt.svg"
                  alt="Nuxt logo"
                />
              </a>
              <a
                href="https://supabase.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12"
                  src="/icons/icon-supabase.svg"
                  alt="Supabase logo"
                />
              </a>
            </div>
            <h3 className="text-3xl text-center">Nuxt & Supabase</h3>
          </div>
          <div className="bg-body-color-light dark:bg-body-color-dark py-14 px-16">
            <div className="flex justify-center gap-2 mb-9">
              <a
                href="https://next.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12"
                  src="/icons/icon-next.svg"
                  alt="Next logo"
                />
              </a>
              <a
                href="https://node.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12"
                  src="/icons/icon-node.svg"
                  alt="Node logo"
                />
              </a>
              <a
                href="https://postgres.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12"
                  src="/icons/icon-postgres.svg"
                  alt="Postgres logo"
                />
              </a>
            </div>
            <h3 className="text-3xl text-center">Next Node & PostgreSQL</h3>
          </div>
          <div className="bg-body-color-light dark:bg-body-color-dark py-14 px-16">
            <div className="flex justify-center gap-3 mb-9">
              <a
                href="https://angular.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12 h-10"
                  src="/icons/icon-angular.svg"
                  alt="Angular logo"
                />
              </a>
              <a
                href="https://firebase.com"
                className="p-2 rounded-full bg-body-color-light-secondary dark:bg-body-color-dark-secondary grid place-content-center hover:scale-110 transition-all ease duration-200">
                <img
                  className="w-12 h-12"
                  src="/icons/icon-firebase.svg"
                  alt="Firebase logo"
                />
              </a>
            </div>
            <h3 className="text-3xl text-center">Angular & Firebase</h3>
          </div>
        </div>
      </Container>
      <SVGSeparator type="waves" classNames="bottom" customHeight="75px" />
    </section>
  );
};

export default OtherStacksSection;
