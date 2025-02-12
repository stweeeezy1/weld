import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const useAnimatedNumber = (
  initialValue,
  targetValue,
  duration = null,
  trigger // Новая зависимость для перезапуска
) => {
  const count = useMotionValue(initialValue);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    // Сбрасываем значение к начальному перед анимацией
    count.set(initialValue);
    const controls = animate(count, targetValue, { duration });
    return () => controls.stop();
  }, [trigger, count, targetValue, duration]); // Добавляем trigger в зависимости

  return rounded;
};
