import { motion } from "framer-motion";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../../lib/animations";

interface StepProps {
  children: React.ReactNode;
}

const Step = ({ children }: StepProps) => {
  return (
    <motion.div
      initial={{ ...simpleFadeInitial }}
      animate={{ ...simpleFadeAnimate, transition: { duration: 0.4 } }}
      exit={{ ...simpleFadeExit, transition: { duration: 0.3 } }}>
      {children}
    </motion.div>
  );
};

export default Step;
