import { motion } from "framer-motion";
import ActionButton from "../buttons/ActionButton";
import {
  simpleFadeInitial,
  simpleFadeExit,
  simpleFadeAnimate,
} from "../../lib/animations";
import { Dispatch, SetStateAction } from "react";

interface FormErrorProps {
  name: "string";
  setFormStatus: Dispatch<SetStateAction<string>>;
}

const FormError = ({ name, setFormStatus }: FormErrorProps) => {
  return (
    <motion.div
      initial={{ ...simpleFadeInitial }}
      animate={{
        ...simpleFadeAnimate,
        transition: { duration: 0.4 },
      }}
      exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
      <div className="grid justify-center p-7">
        <p>I&apos;m sorry {name}, but something seems to have gone wrong...</p>
        <ActionButton
          type="button"
          variant="primary"
          color="secondary"
          callback={() => setFormStatus("initial")}>
          Try Again?
        </ActionButton>
      </div>
    </motion.div>
  );
};

export default FormError;
