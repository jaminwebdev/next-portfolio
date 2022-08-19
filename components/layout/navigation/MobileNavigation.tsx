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
      <div>
        <p className="text-white">Blog</p>
        <p className="text-white">Resources</p>
        <p className="text-white">Contact</p>
      </div>
    </div>
  );
};

export default MobileNavigation;
