import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import AppIcon from "../../AppIcon";

const SecondStep = ({ register, stepControl, trigger, getValues }) => {
  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  return (
    <>
      <p className="mb-3">
        <strong>
          Awesome. Thanks, {getValues("Name")}. What sort of project are you
          working on? *
        </strong>
      </p>
      <label className="block mb-2">
        <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
          <input
            className="w-5 h-5 accent-primary-medium"
            type="checkbox"
            {...register("Interest", { required: true })}
            value="I need a brand new website"
          />
          I need a brand new website
        </div>
      </label>
      <label className="block mb-2">
        <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
          <input
            className="w-5 h-5 accent-primary-medium"
            type="checkbox"
            {...register("Interest")}
            value="My website is slow/buggy"
          />
          My website is slow/buggy
        </div>
      </label>
      <label className="block mb-2">
        <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
          <input
            className="w-5 h-5 accent-primary-medium"
            type="checkbox"
            {...register("Interest")}
            value="My SEO is poor"
          />
          My SEO is poor
        </div>
      </label>
      <label className="block mb-2">
        <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
          <input
            className="w-5 h-5 accent-primary-medium"
            type="checkbox"
            {...register("Interest")}
            value="My website doesn't convert well"
          />
          My website doesn&apos;t convert well
        </div>
      </label>
      <label className="block mb-2">
        <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
          <input
            className="w-5 h-5 accent-primary-medium"
            type="checkbox"
            {...register("Interest")}
            value="I'm not sure. I'd like to chat"
          />
          I&apos;m not sure. I&pos;d like to chat
        </div>
      </label>
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
          {getValues("Interest").length > 0 ? (
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

export default SecondStep;
