import Link from "next/link";
import AppIcon from "../../AppIcon";
import DropDownLink from "./DropDownLink";

interface DesktopNavigationProps {
  styles: string;
}

const DesktopNavigation = ({ styles }: DesktopNavigationProps) => {
  return (
    <div className={`col-span-2 grid-flow-col gap-10 justify-end ${styles}`}>
      <div className="relative">
        <Link href="/">
          <a className="text-lg p-4 font-medium text-primary-medium hover:text-secondary dark:text-body-text-light">
            Portfolio
          </a>
        </Link>
      </div>
      <div className="relative">
        <Link href="/">
          <a className="peer text-lg p-4 font-medium text-primary-medium hover:text-secondary dark:text-body-text-light">
            Resources
          </a>
        </Link>
        <div className="invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition-all ease-out duration-100 grid w-40 absolute top-[120%] z-50 bg-white dark:bg-body-color-dark-secondary rounded-lg shadow-lg shadow-body-color-dark/10 dark:shadow-body-color-dark/60 overflow-hidden">
          <DropDownLink link="/">
            <AppIcon icon="book" classNames="fill-secondary w-3"></AppIcon>
            Blog
          </DropDownLink>
          <DropDownLink link="/">
            <AppIcon icon="clipboard" classNames="fill-secondary w-3"></AppIcon>
            Learn JS
          </DropDownLink>
        </div>
      </div>
      <a href="https://github.com">
        <AppIcon
          icon="github"
          classNames="w-8 fill-primary-dark dark:fill-secondary hover:scale-110 hover:fill-secondary transition-all duration-100"></AppIcon>
      </a>
      <a href="https://linkedin.com">
        <AppIcon
          icon="linkedin"
          classNames="w-6 fill-primary-dark dark:fill-secondary hover:scale-110 hover:fill-secondary transition-all duration-100"></AppIcon>
      </a>
    </div>
  );
};

export default DesktopNavigation;
