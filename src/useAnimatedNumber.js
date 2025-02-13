import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const useAnimatedNumber = (
  initialValue,
  targetValue,
  duration = null,
  trigger
) => {
  const count = useMotionValue(initialValue);
  const rounded = useTransform(count, (value) => Math.round(value) + "+");

  useEffect(() => {
    count.set(initialValue);
    const controls = animate(count, targetValue, { duration });
    return () => controls.stop();
  }, [trigger, count, targetValue, duration]);

  return rounded;
};
