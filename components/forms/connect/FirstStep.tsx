import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import useWindowDimensions from "../../../lib/useWindowDimensions";
import ActionButton from "../../buttons/ActionButton";
import AppIcon from "../../AppIcon";
import Message from "../../Message";

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
      <label htmlFor="Name" className="block mb-1 font-bold">
        First, what should I call you, friend?
      </label>
      <input
        type="text"
        {...register("Name", { required: true })}
        className="w-full rounded-md h-10 px-3 text-gray-700 placeholder-gray-400 outline-none border-2 border-transparent focus:border-secondary/60"
        placeholder="Your name"
      />

      <AnimatePresence>
        {getFieldState("Name").invalid && touchedFields.Name ? (
          <motion.div
            initial={fadeGrowInitial}
            animate={fadeGrowAnimate}
            exit={fadeShrinkExit}>
            <Message>
              <p>This field is required</p>
            </Message>
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
                  <AppIcon icon="arrowRight" classNames="w-3 fill-white" />
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
