import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import useWindowDimensions from "../../../lib/useWindowDimensions";

const ThirdStep = ({
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
      setFocus("WebsiteDetails");
    }
    triggerValidation();
  }, [setFocus, triggerValidation, windowWidth]);

  return (
    <>
      <label htmlFor="WebsiteDetails" className="mb-4 block">
        Briefly explain what your site/business does or needs to do:
      </label>
      <textarea
        {...register("WebsiteDetails", { maxLength: 200 })}
        placeholder="Website needs and wants"
        rows={6}
        className="py-1 px-2 resize-none w-full"
      />
      <p className="mt-2">
        Please keep it brief - max characters 200. Characters left:
        {200 - getValues("WebsiteDetails").length}
      </p>
      <AnimatePresence>
        {getFieldState("WebsiteDetails").invalid ? (
          <motion.div
            key="WebsiteDetailsMessage"
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
          {getValues("WebsiteExistence") !== null ? (
            <motion.div
              initial={fadeGrowInitial}
              animate={fadeGrowAnimate}
              exit={fadeShrinkExit}
              className="justify-self-start">
              <ActionButton
                variant="primary"
                color="secondary"
                callback={() => stepControl("next")}
                type="button">
                Next
              </ActionButton>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ThirdStep;
