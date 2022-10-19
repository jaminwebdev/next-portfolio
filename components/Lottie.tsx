import { useEffect, useRef } from "react";

import lottie from "lottie-web";

interface LottieProps {
  animationData: any;
  speed?: number;
  width?: string;
  height?: string;
  delay?: number;
  loop?: boolean;
}

export const Lottie = ({
  animationData,
  width = "100%",
  height = "auto",
  delay = 0,
  loop = false,
  speed = 1,
}: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    let lottieTimeout;
    if (element.current) {
      lottieTimeout = setTimeout(() => {
        lottieInstance.current = lottie
          .loadAnimation({
            animationData,
            container: element.current,
            loop,
          })
          .setSpeed(speed);
      }, delay);
    }
    return () => {
      lottieInstance.current?.destroy();
      if (lottieTimeout) clearTimeout(lottieTimeout);
    };
  }, [animationData, delay, loop, speed]);

  return <div style={{ width, height }} ref={element}></div>;
};

export default Lottie;
