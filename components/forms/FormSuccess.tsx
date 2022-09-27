import { motion } from "framer-motion";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../../lib/animations";
import Lottie from "../Lottie";
import * as SuccessLottie from "../../lib/lottie/success-lottie.json";
import { useEffect } from "react";

interface FormSuccessProps {
  name: string;
}

const FormSuccess = ({ name }: FormSuccessProps) => {
  return (
    <motion.div
      initial={{ ...simpleFadeInitial }}
      animate={{
        ...simpleFadeAnimate,
        transition: { duration: 0.4 },
      }}
      exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
      <div className="grid justify-items-center p-7">
        <Lottie animationData={SuccessLottie} width="200px" />
        <h4>Success!</h4>
        <p>We&apos;ll be in touch, {name}!</p>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
