import styles from "/src/components/Info/Info.module.css";
import { useLanguage } from "/src/useLanguage.js";
import { motion } from "framer-motion";

const animationN = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Info() {
  const { language, toggleLanguage, t } = useLanguage();
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
        >
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 0.75 }}
          >
            <h1>10</h1>
            <p>{t("welding_directions")}</p>
          </motion.div>
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 1 }}
          >
            <h1>20</h1>
            <p>{t("schools_with_welding")}</p>
          </motion.div>
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 1.25 }}
          >
            <h1>100</h1>
            <p>{t("qualified_teachers")}</p>
          </motion.div>
          <motion.div
            className={styles.info_stat}
            variants={animationN}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.info_forth}>
              <h1>10000</h1>
              <p>{t("trained_people")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
