import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import AppIcon from "../../AppIcon";

const FifthStep = ({
  register,
  getFieldState,
  stepControl,
  trigger,
  getValues,
  touchedFields,
}) => {
  const triggerValidation = useCallback(async () => await trigger(), [trigger]);

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  return (
    <>
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
            <AppIcon icon="arrowLeft" classNames="w-3 fill-secondary" />
            Previous
          </ActionButton>
        </div>
        <AnimatePresence>
          {!getFieldState("ContactValue").invalid ? (
            <motion.div
              initial={fadeGrowInitial}
              animate={fadeGrowAnimate}
              exit={fadeShrinkExit}
              className="justify-self-end">
              <ActionButton
                variant="primary"
                color="secondary"
                callback={() => {}}
                type="submit">
                Submit
                <AppIcon
                  icon="paperPlane"
                  classNames="w-4 stroke-white"></AppIcon>
              </ActionButton>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FifthStep;
