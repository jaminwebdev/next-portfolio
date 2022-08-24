import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import useWindowDimensions from "../../../lib/useWindowDimensions";

const FourthStep = ({
  register,
  getFieldState,
  stepControl,
  setFocus,
  trigger,
  getValues,
  touchedFields,
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
        What&apos;s your name? *
      </label>
      <input
        type="text"
        {...register("Name", { required: true })}
        className="mb-4"
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

      <label htmlFor="ContactMethod" className="mb-4 block">
        What&apos;s your preferred method of contact, {getValues("Name")}?
      </label>
      <select {...register("ContactMethod")} className="mb-4">
        <option>Email</option>
        <option>Phone</option>
        <option>LinkedIn</option>
        <option>Instagram</option>
      </select>

      <label htmlFor="ContactValue" className="mb-4 block">
        What&apos;s your {getValues("ContactMethod")}? *
      </label>
      <input type="text" {...register("ContactValue", { required: true })} />

      <AnimatePresence>
        {getFieldState("ContactValue").invalid && touchedFields.ContactValue ? (
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
          {!getFieldState("Name").invalid &&
          !getFieldState("ContactValue").invalid ? (
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

export default FourthStep;
