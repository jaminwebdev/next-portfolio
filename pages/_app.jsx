import { useState } from "react";
import MobileNavigation from "../components/layout/navigation/MobileNavigation.tsx";
import Navigation from "../components/layout/navigation/Navigation.tsx";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileNavVisibility = () => {
    setMobileOpen((status) => !status);
  };

  return (
    <>
      <MobileNavigation closeMobileNav={toggleMobileNavVisibility} />
      <div
        id="appLayout"
        className={`
        relative
        z-10
        bg-body-color-light
        dark:bg-body-color-dark
        min-h-[150vh]
        transition-all
        ease-out
        duration-500
        ${mobileOpen ? "perspective-400" : ""}
        ${mobileOpen ? "rotate-y-65" : ""}
        ${mobileOpen ? "origin-left-center" : ""}
      `}>
        <Navigation toggleMobileNav={toggleMobileNavVisibility} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
