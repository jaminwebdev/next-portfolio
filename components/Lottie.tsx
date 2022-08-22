import { useEffect, useRef } from "react";

import lottie from "lottie-web";

interface LottieProps {
  animationData: any;
  width: number;
  height: number;
  delay: number;
}

export const Lottie = ({
  animationData,
  width,
  height,
  delay,
}: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      setTimeout(() => {
        lottieInstance.current = lottie.loadAnimation({
          animationData,
          container: element.current,
        });
      }, delay);
    }
    return () => {
      lottieInstance.current?.destroy();
    };
  }, [animationData, delay]);

  return <div style={{ width, height }} ref={element}></div>;
};
