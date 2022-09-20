import LinkButton from "../components/buttons/LinkButton";
import AppIcon from "../components/AppIcon";

export const featuredPortfolio = {
  icons: ["vue", "node", "postgres"],
  iconLinks: ["https://vue.com", "https://node.com", "https://postgres.com"],
  tagIcon: "github",
  tagLink: "https://github.com",
  heading: "Featured Portfolio",
  body: "Lorem ipsum dolor sit amet, word and some adipiscing elit. Lorem ipsum dolor sit amet, word and some adipiscing elit",
  btns: (
    <>
      <LinkButton
        variant="primary"
        color="primary"
        origin="external"
        link="/"
        classNames="dark:bg-secondary">
        Details
        <AppIcon icon="clipboard" classNames="w-4 ml-2 fill-white" />
      </LinkButton>
      <LinkButton variant="ghost" color="secondary" origin="internal" link="/">
        View
        <AppIcon icon="eyes" classNames="w-4 ml-2 fill-secondary" />
      </LinkButton>
    </>
  ),
  bgImg: "https://i.imgur.com/WNmG3Q6.jpg",
};

export const portfolioItems = [
  {
    icons: ["vue", "node", "postgres"],
    iconLinks: ["https://vue.com", "https://node.com", "https://postgres.com"],
    tagIcon: "github",
    tagLink: "https://github.com",
    heading: "Sample Portfolio",
    body: "Lorem ipsum dolor sit amet, word and some adipiscing elit. Lorem ipsum dolor sit amet, word and some adipiscing elit",
    btns: (
      <>
        <LinkButton
          variant="primary"
          color="primary"
          origin="external"
          link="/"
          classNames="dark:bg-secondary">
          Details
          <AppIcon icon="clipboard" classNames="w-4 ml-2 fill-white" />
        </LinkButton>
        <LinkButton
          variant="ghost"
          color="secondary"
          origin="internal"
          link="/">
          View
          <AppIcon icon="eyes" classNames="w-4 ml-2 fill-secondary" />
        </LinkButton>
      </>
    ),
    bgImg: "https://i.imgur.com/WNmG3Q6.jpg",
  },
  {
    icons: ["vue", "node", "postgres"],
    iconLinks: ["https://vue.com", "https://node.com", "https://postgres.com"],
    tagIcon: "github",
    tagLink: "https://github.com",
    heading: "Portfolio Item",
    body: "Lorem ipsum dolor sit amet, word and some adipiscing elit. Lorem ipsum dolor sit amet, word and some adipiscing elit",
    btns: (
      <>
        <LinkButton
          variant="primary"
          color="primary"
          origin="external"
          link="/"
          classNames="dark:bg-secondary">
          Details
          <AppIcon icon="clipboard" classNames="w-4 ml-2 fill-white" />
        </LinkButton>
        <LinkButton
          variant="ghost"
          color="secondary"
          origin="internal"
          link="/">
          View
          <AppIcon icon="eyes" classNames="w-4 ml-2 fill-secondary" />
        </LinkButton>
      </>
    ),
    bgImg: "https://i.imgur.com/WNmG3Q6.jpg",
  },
  {
    icons: ["vue", "node", "postgres"],
    iconLinks: ["https://vue.com", "https://node.com", "https://postgres.com"],
    tagIcon: "github",
    tagLink: "https://github.com",
    heading: "James Q Quick - Closure",
    body: "Lorem ipsum dolor sit amet, word and some adipiscing elit. Lorem ipsum dolor sit amet, word and some adipiscing elit",
    btns: (
      <>
        <LinkButton
          variant="primary"
          color="primary"
          origin="external"
          link="/"
          classNames="dark:bg-secondary">
          Details
          <AppIcon icon="clipboard" classNames="w-4 ml-2 fill-white" />
        </LinkButton>
        <LinkButton
          variant="ghost"
          color="secondary"
          origin="internal"
          link="/">
          View
          <AppIcon icon="eyes" classNames="w-4 ml-2 fill-secondary" />
        </LinkButton>
      </>
    ),
    bgImg: "https://i.imgur.com/WNmG3Q6.jpg",
  },
];
