import { motion } from "framer-motion";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../../lib/animations";

interface FormSubmittingProps {
  name: string;
}

const FormSubmitting = ({ name }: FormSubmittingProps) => {
  return (
    <motion.div
      initial={{ ...simpleFadeInitial }}
      animate={{
        ...simpleFadeAnimate,
        transition: { duration: 0.4 },
      }}
      exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
      <div className="grid justify-items-center p-7">
        <p>Just a moment, {name}.</p>
        <p>We&apos;re submitting your request...</p>
      </div>
    </motion.div>
  );
};

export default FormSubmitting;
