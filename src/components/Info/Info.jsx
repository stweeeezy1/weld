import { useState } from "react";
import styles from "/src/components/Info/Info.module.css";
import { useLanguage } from "/src/useLanguage.js";
import { motion } from "framer-motion";
import { useAnimatedNumber } from "/src/useAnimatedNumber.js";
import { animationN } from "/src/animation.js";

export default function Info() {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);

  const weldingDirections = useAnimatedNumber(0, 4, 0.75, hasAnimated);
  const schoolsWithWelding = useAnimatedNumber(0, 5, 1, hasAnimated);
  const qualifiedTeachers = useAnimatedNumber(0, 6, 1.25, hasAnimated);
  const trainedPeople = useAnimatedNumber(0, 20, 1.5, hasAnimated);

  return (
    <div className={styles.info_container}>
      <div className={styles.info_company}>
        <div className={styles.info_company_text}>
          <p>
            <b>MethodX</b> {t("info")}
          </p>
        </div>
        <motion.div
          className={styles.info_company_numbers}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.2 }}
          onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
        >
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 0.5 }}
          >
            <motion.h1>{weldingDirections}</motion.h1>
            <p>{t("welding_directions")}</p>
          </motion.div>
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 0.75 }}
          >
            <motion.h1>{schoolsWithWelding}</motion.h1>
            <p>{t("schools_with_welding")}</p>
          </motion.div>
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 1 }}
          >
            <motion.h1>{qualifiedTeachers}</motion.h1>
            <p>{t("qualified_teachers")}</p>
          </motion.div>
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 1.25 }}
          >
            <motion.h1>{trainedPeople}</motion.h1>
            <p>{t("trained_people")}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
