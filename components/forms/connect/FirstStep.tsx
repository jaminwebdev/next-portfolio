import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import useWindowDimensions from "../../../lib/useWindowDimensions";
import ActionButton from "../../buttons/ActionButton";

const FirstStep = ({
  register,
  getFieldState,
  stepControl,
  trigger,
  touchedFields,
  setFocus,
}) => {
  const { windowWidth } = useWindowDimensions();

  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    if (windowWidth > 800) {
      setFocus("Name");
    }
    triggerValidation();
  }, [setFocus, triggerValidation, windowWidth]);

  return (
    <>
      <label htmlFor="Name" className="mb-4 block">
        First, what should I call you, friend?
      </label>
      <input
        type="text"
        {...register("Name", { required: true })}
        className="mb-4"
        placeholder="Your name"
      />

      <AnimatePresence>
        {getFieldState("Name").invalid && touchedFields.Name ? (
          <motion.div
            initial={fadeGrowInitial}
            animate={fadeGrowAnimate}
            exit={fadeShrinkExit}>
            <p className="py-1 px-4 bg-slate-300 dark:bg-body-color-dark-secondary">
              This field is required
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="grid gap-2">
        <AnimatePresence>
          {!getFieldState("Name").invalid ? (
            <div className="mt-4 justify-self-end">
              <motion.div
                initial={fadeGrowInitial}
                animate={fadeGrowAnimate}
                exit={fadeShrinkExit}>
                <ActionButton
                  variant="primary"
                  color="secondary"
                  callback={() => stepControl("next")}
                  type="button"
                  data-cy="GeneralMultiStepFirstStepNextBtn">
                  Next
                </ActionButton>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FirstStep;
