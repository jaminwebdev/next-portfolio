import AppLogo from "../AppLogo";
import AppIcon from "../AppIcon";
import Container from "../Container";
import Link from "next/link";

const Footer = () => (
  <footer className="mt-20 pb-6">
    <Container>
      <div className="grid gap-16 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start">
        <div className="p-8 bg-body-color-light-secondary dark:bg-body-color-dark-secondary">
          <AppLogo />
          <p className="mt-5">
            I&apos;m a developer specializing in all things JS - Vue, React,
            Astro, Svelte, Angular, & Node.
          </p>
        </div>
        <div className="grid gap-4 px-4 text-lg">
          <h3 className="text-3xl">Quick Links</h3>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </div>
        <div className="grid gap-4 px-4 text-lg">
          <h3 className="text-3xl">Resources</h3>
          <Link href="/">
            <a>Learn JS</a>
          </Link>
          <Link href="/">
            <a>Learn Vue</a>
          </Link>
          <Link href="/">
            <a>Learn React</a>
          </Link>
        </div>
        <div className="grid gap-4 px-4 justify-items-start">
          <h3 className="text-3xl">Follow Me</h3>
          <div className="grid grid-cols-2 gap-4 items-center">
            <a href="https://github.com">
              <AppIcon
                icon="github"
                classNames="w-8 fill-primary-medium dark:fill-secondary hover:fill-secondary"
              />
            </a>
            <a href="https://linkedin.com">
              <AppIcon
                icon="linkedin"
                classNames="w-7 fill-primary-medium dark:fill-secondary hover:fill-secondary"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
