import Link from "next/link";
import AppIcon from "../../AppIcon";

interface MobileNavigationProps {
  closeMobileNav: () => {};
}

const MobileNavigation = ({ closeMobileNav }: MobileNavigationProps) => {
  return (
    <div
      className={`
        fixed 
        w-screen 
        h-screen
        bg-body-color-dark-secondary
        dark:bg-[#223544] 
        z-0
        grid
        justify-items-end
        items-center
        pr-10
      `}>
      <div
        onClick={closeMobileNav}
        className="absolute right-8 top-6 cursor-pointer">
        <AppIcon icon="close" classNames="fill-white w-8" />
      </div>
      <div className="grid gap-6">
        <Link href="/blog" scroll={false}>
          <a
            onClick={closeMobileNav}
            className="text-white text-2xl grid gap-3 grid-cols-[min-content,1fr] items-center">
            <AppIcon icon="book" classNames="fill-white w-5" />
            Blog
          </a>
        </Link>
        <Link href="/resources" scroll={false}>
          <a
            onClick={closeMobileNav}
            className="text-white text-2xl grid gap-3 grid-cols-[min-content,1fr] items-center">
            <AppIcon icon="clipboard" classNames="fill-white w-5" />
            Resources
          </a>
        </Link>
        <Link href="/resources/learn-javascript" scroll={false}>
          <a
            onClick={closeMobileNav}
            className="text-white text-2xl grid gap-3 grid-cols-[min-content,1fr] items-center">
            <AppIcon icon="javascript" classNames="fill-white w-5" />
            Learn JS
          </a>
        </Link>
        <Link href="/resources/learn-react" scroll={false}>
          <a
            onClick={closeMobileNav}
            className="text-white text-2xl grid gap-3 grid-cols-[min-content,1fr] items-center">
            <AppIcon icon="react" classNames="fill-white w-5" />
            Learn React
          </a>
        </Link>
        <Link href="/resources/learn-vue" scroll={false}>
          <a
            onClick={closeMobileNav}
            className="text-white text-2xl grid gap-3 grid-cols-[min-content,1fr] items-center">
            <AppIcon icon="vue" classNames="fill-white w-5" />
            Learn Vue
          </a>
        </Link>
        <Link href="/" scroll={false}>
          <a
            onClick={closeMobileNav}
            className="text-white text-2xl grid gap-3 grid-cols-[min-content,1fr] items-center">
            <AppIcon icon="chat" classNames="stroke-white w-5" />
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
