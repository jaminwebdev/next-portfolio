import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import AppIcon from "../../AppIcon";
import Message from "../../Message";
import useWindowDimensions from "../../../lib/useWindowDimensions";

const FourthStep = ({
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
      <label htmlFor="WebsiteDetails" className="block mb-2 font-bold">
        Briefly explain what your site/business does or needs to do:
      </label>
      <textarea
        {...register("WebsiteDetails", { maxLength: 200 })}
        placeholder="Website needs and wants"
        rows={6}
        className="py-2 px-3 w-full dark:text-body-text-dark rounded-md resize-none placeholder-gray-400 outline-none border-2 border-transparent focus:border-secondary/60"
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
            <Message>
              <p>
                You&apos;ve surpassed the character limit. Please keep it under
                200 characters.
              </p>
            </Message>
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
            <AppIcon icon="arrowLeft" classNames="w-3 fill-secondary" />
            Previous
          </ActionButton>
        </div>
        <AnimatePresence>
          {!getFieldState("WebsiteDetails").invalid ? (
            <motion.div
              initial={fadeGrowInitial}
              animate={fadeGrowAnimate}
              exit={fadeShrinkExit}
              className="justify-self-end">
              <ActionButton
                variant="primary"
                color="secondary"
                callback={() => stepControl("next")}
                type="button">
                Next
                <AppIcon icon="arrowRight" classNames="w-3 fill-white" />
              </ActionButton>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FourthStep;
