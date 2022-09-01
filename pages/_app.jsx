import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../lib/animations";
import MobileNavigation from "../components/layout/navigation/MobileNavigation.tsx";
import Navigation from "../components/layout/navigation/Navigation.tsx";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const nextRouter = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const scrollToTop = (url) => {
      const navTo = url.split("?")[0];
      const navFrom = nextRouter.asPath.split("?")[0];
      if (navTo !== navFrom) {
        setTimeout(() => {
          console.log("scrolling");
          window.scroll({ top: 0, behavior: "smooth" });
        }, 500);
      }
    };

    const checkAndScrollToSection = (url) => {
      const query = window.location.search.split("=")[1];
      if (query) {
        setTimeout(() => {
          const scrollTo = document.getElementById(query);
          if (scrollTo) {
            scrollTo.scrollIntoView({ behavior: "smooth" });
          }
        }, 600);
      }
    };

    nextRouter.events.on("routeChangeStart", scrollToTop);
    nextRouter.events.on("routeChangeComplete", checkAndScrollToSection);

    return () => {
      nextRouter.events.off("routeChangeStart", scrollToTop);
      nextRouter.events.off("routeChangeComplete", checkAndScrollToSection);
    };
  }, [nextRouter]);

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
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={simpleFadeInitial}
            animate={{
              ...simpleFadeAnimate,
              transition: {
                duration: 0.4,
              },
            }}
            exit={{
              ...simpleFadeExit,
              transition: {
                duration: 0.4,
              },
            }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
