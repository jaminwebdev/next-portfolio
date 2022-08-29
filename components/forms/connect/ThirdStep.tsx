import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import AppIcon from "../../AppIcon";

const ThirdStep = ({ register, stepControl, trigger, getValues }) => {
  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  return (
    <>
      <p className="block mb-2 font-bold">Do you have a website already? *</p>

      <label className="grid grid-cols-[auto,1fr] gap-2 items-center">
        <input
          type="radio"
          name="WebsiteExistence"
          value="true"
          className="w-4 h-4 accent-primary-medium"
          {...register("WebsiteExistence", { required: true })}
        />
        Yes
      </label>
      <label className="grid grid-cols-[auto,1fr] gap-2 items-center">
        <input
          type="radio"
          name="WebsiteExistence"
          value="false"
          className="w-4 h-4 accent-primary-medium"
          {...register("WebsiteExistence", { required: true })}
        />
        No
      </label>

      <AnimatePresence>
        {getValues("WebsiteExistence") === "true" ? (
          <motion.div
            initial={fadeGrowInitial}
            animate={fadeGrowAnimate}
            exit={fadeShrinkExit}
            className="grid mt-4">
            <label htmlFor="WebsiteUrl" className="block mb-2 font-bold">
              What&apos;s your website&apos;s URL?
            </label>
            <input
              type="text"
              {...register("WebsiteUrl")}
              placeholder="Website URL"
              className="w-full rounded-md h-10 px-3 text-gray-700 placeholder-gray-400 outline-none border-2 border-transparent focus:border-secondary/60"
            />
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
          {getValues("WebsiteExistence") !== null ? (
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

export default ThirdStep;
