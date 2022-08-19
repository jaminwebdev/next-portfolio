const MobileNavigation = ({ closeMobileNav }) => {
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
      <div>
        <p className="text-white" onClick={closeMobileNav}>
          Blog
        </p>
        <p className="text-white" onClick={closeMobileNav}>
          Resources
        </p>
        <p className="text-white" onClick={closeMobileNav}>
          Contact
        </p>
      </div>
    </div>
  );
};

export default MobileNavigation;
