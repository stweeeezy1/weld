import { motionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const useAnimatedNumber = (
  initialValue,
  targetValue,
  duration = 1,
  shouldAnimate
) => {
  const count = motionValue(initialValue);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (shouldAnimate) {
      const controls = animate(count, targetValue, {
        duration: duration,
        type: "tween",
      });
      return () => controls.stop();
    }
  }, [shouldAnimate, count, targetValue, duration]);

  return rounded;
};
