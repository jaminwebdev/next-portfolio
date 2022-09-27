import { useEffect, useRef } from "react";

import lottie from "lottie-web";

interface LottieProps {
  animationData: any;
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
}: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      setTimeout(() => {
        lottieInstance.current = lottie.loadAnimation({
          animationData,
          container: element.current,
          loop,
        });
      }, delay);
    }
    return () => {
      lottieInstance.current?.destroy();
      lottie.destroy();
    };
  }, [animationData, delay, loop]);

  return <div style={{ width, height }} ref={element}></div>;
};

export default Lottie;
