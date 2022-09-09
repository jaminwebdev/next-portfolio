import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../lib/useWindowDimensions";

const ScrollReveal = ({
  delay = 0,
  duration = 0.6,
  threshold = 0.5,
  bounce = false,
  children,
}) => {
  const animationControl = useAnimation();
  const { windowWidth } = useWindowDimensions();
  const { inView, entry, ref } = useInView({
    triggerOnce: true,
    threshold: windowWidth > 800 ? threshold : 0.8,
  });

  const animate = async () => {
    await animationControl.start({
      scale: [1, 1.03, 1],
      opacity: 1,
      transition: {
        delay: windowWidth > 800 ? delay : 0,
        duration,
      },
    });
    if (bounce) {
      return await animationControl.start({
        y: -20,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1.5,
        },
      });
    }
  };

  if (inView) {
    animate();
  }

  return (
    <div ref={ref}>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={animationControl}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ScrollReveal;
