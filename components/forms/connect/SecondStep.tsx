import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";

const SecondStep = ({ register, stepControl, trigger, getValues }) => {
  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  return (
    <>
      <div className="grid gap-2">
        <p className="mb-2">Do you have a website already? *</p>

        <label className="grid grid-cols-[auto,1fr] gap-2">
          <input
            type="radio"
            name="WebsiteExistence"
            value="true"
            {...register("WebsiteExistence", { required: true })}
          />
          Yes
        </label>
        <label className="grid grid-cols-[auto,1fr] gap-2">
          <input
            type="radio"
            name="WebsiteExistence"
            value="false"
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
              <label htmlFor="WebsiteUrl" className="mb-3">
                What&apos;s your website&apos;s URL?
              </label>
              <input type="text" {...register("WebsiteUrl")} />
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
      </div>
    </>
  );
};

export default SecondStep;
