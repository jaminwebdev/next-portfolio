import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import useWindowDimensions from "../../../lib/useWindowDimensions";

const FifthStep = ({
  register,
  getFieldState,
  stepControl,
  setFocus,
  trigger,
  getValues,
}) => {
  const { windowWidth } = useWindowDimensions();

  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    if (windowWidth > 800) {
      setFocus("AdditionalQuestions");
    }
    triggerValidation();
  }, [setFocus, triggerValidation, windowWidth]);

  return (
    <>
      <label htmlFor="AdditionalQuestions" className="mb-4 block">
        Any additional questions we should come prepared to answer for you?
      </label>
      <textarea
        {...register("AdditionalQuestions", { maxLength: 200 })}
        placeholder="Anything else?"
        rows={6}
        className="py-1 px-2 resize-none w-full"
      />
      <p className="mt-2">
        Please keep it brief - max characters 200. Characters left:
        {200 - getValues("AdditionalQuestions").length}
      </p>
      <AnimatePresence>
        {getFieldState("AdditionalQuestions").invalid ? (
          <motion.div
            key="AdditionalQuestionsMessage"
            initial={fadeGrowInitial}
            animate={fadeGrowAnimate}
            exit={fadeShrinkExit}>
            <p className="py-1 px-4 bg-slate-300 dark:bg-body-color-dark-secondary">
              You&apos;ve surpassed the character limit. Please keep it under
              200 characters.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-2 mt-4">
        <div className="justify-self-start">
          <ActionButton
            callback={() => stepControl("prev")}
            variant="ghost"
            color="secondary"
            type="button">
            Previous
          </ActionButton>
        </div>
        <AnimatePresence>
          {!getFieldState("AdditionalQuestions").invalid ? (
            <motion.div
              initial={fadeGrowInitial}
              animate={fadeGrowAnimate}
              exit={fadeShrinkExit}
              className="justify-self-start">
              <ActionButton
                variant="primary"
                color="secondary"
                callback={() => {}}
                type="submit">
                Let&apos;s Do This!
              </ActionButton>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FifthStep;
