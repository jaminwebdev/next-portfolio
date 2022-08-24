import { motion } from "framer-motion";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../../lib/animations";

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
        <h4>Success!</h4>
        <p>We&apos;ll be in touch, {name}!</p>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
