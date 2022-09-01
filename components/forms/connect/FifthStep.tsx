import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback, useState, useRef } from "react";
import {
  fadeGrowInitial,
  fadeGrowAnimate,
  fadeShrinkExit,
} from "../../../lib/animations";
import ActionButton from "../../buttons/ActionButton";
import AppIcon from "../../AppIcon";
import Message from "../../Message";

const FifthStep = ({
  register,
  getFieldState,
  stepControl,
  trigger,
  getValues,
  touchedFields,
}) => {
  const triggerValidation = useCallback(async () => await trigger(), [trigger]);
  let contactMethod = useRef(getValues("ContactMethod"));

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  useEffect(() => {
    if (contactMethod.current !== getValues("ContactMethod")) {
      contactMethod.current = getValues("ContactMethod");
      triggerValidation();
    }
  });

  const getValidation = () => {
    if (getValues("ContactMethod") === "Phone") {
      return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    }

    if (getValues("ContactMethod") === "Email") {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }

    return /./;
  };

  return (
    <>
      <label htmlFor="ContactMethod" className="block mb-2 font-bold">
        What&apos;s your preferred method of contact, {getValues("Name")}?
      </label>
      <select
        {...register("ContactMethod")}
        className="w-full mb-4 rounded-md h-10 px-3 text-gray-700 outline-none border-2 border-transparent focus:border-secondary/60">
        <option>Email</option>
        <option>Phone</option>
        <option>LinkedIn</option>
        <option>Instagram</option>
      </select>

      <label htmlFor="ContactValue" className="block mb-2 font-bold">
        What&apos;s your {getValues("ContactMethod")}? *
      </label>
      <input
        type="text"
        className="w-full rounded-md h-10 px-3 text-gray-700 placeholder-gray-400 outline-none border-2 border-transparent focus:border-secondary/60"
        {...register("ContactValue", {
          required: true,
          pattern: getValidation(),
        })}
        placeholder={getValues("ContactMethod")}
      />

      <AnimatePresence>
        {getFieldState("ContactValue").invalid && touchedFields.ContactValue ? (
          <motion.div
            initial={fadeGrowInitial}
            animate={fadeGrowAnimate}
            exit={fadeShrinkExit}>
            <Message>
              <p>Please provide a valid {getValues("ContactMethod")}</p>
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
