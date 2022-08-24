import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";

const FirstStep = ({ register, getFieldState, stepControl, trigger }) => {
  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  return (
    <>
      <div className="grid gap-2">
        <p>
          <strong>What can we help you with? *</strong>
        </p>
        <label>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <input
              type="checkbox"
              {...register("Interest", { required: true })}
              value="SEO"
            />
            SEO
          </div>
        </label>
        <label>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <input type="checkbox" {...register("Interest")} value="Content" />
            Content
          </div>
        </label>
        <label>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <input
              type="checkbox"
              {...register("Interest")}
              value="Web Design Dev"
            />
            Web Design/Development
          </div>
        </label>
        <label>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <input
              type="checkbox"
              {...register("Interest")}
              value="Advertising"
            />
            Advertising
          </div>
        </label>
        <label>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <input type="checkbox" {...register("Interest")} value="Unsure" />
            Not Sure
          </div>
        </label>
        <AnimatePresence>
          {!getFieldState("Interest").invalid ? (
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
