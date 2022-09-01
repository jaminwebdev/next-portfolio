import Link from "next/link";
import DesktopNavigation from "./DesktopNavigation";
import AppIcon from "../../AppIcon";
import AppLogo from "../../AppLogo";

interface NavigationProps {
  toggleMobileNav: () => {};
}

const Navigation = ({ toggleMobileNav }: NavigationProps) => {
  return (
    <nav className="fixed top-7 left-[50%] -translate-x-1/2 mx-auto w-full max-w-7xl z-[1000]">
      <div className="px-6 lg:px-14 py-3 mx-3 lg:mx-auto relative grid grid-cols-3 items-center -mb-28 bg-white dark:bg-body-color-dark-secondary rounded-3xl shadow-xl shadow-primary-dark/5 dark:shadow-body-color-dark">
        <AppLogo classNames="max-h-[50px] block relative grid items-center justify-items-start" />
        <DesktopNavigation styles="hidden lg:grid" />
        <div onClick={toggleMobileNav} className="justify-self-end col-start-3">
          <AppIcon
            icon="menu"
            classNames="inline-block lg:hidden fill-primary-medium dark:fill-body-text-light w-5 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
