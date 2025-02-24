import styles from "/src/components/courses/courses.module.css";
import { useLanguage } from "/src/useLanguage.js";
import { animation, animationN, animationb } from "/src/animation.js";
import { motion } from "framer-motion";

export default function Courses() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <div id="courses" className={styles.courses_container}>
      <div className={styles.courses_main}>
        <motion.div
          className={styles.courses_header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <motion.h1 variants={animation} transition={{ duration: 0.75 }}>
            {t("courses_main")}
          </motion.h1>
          <motion.h3 variants={animationN} transition={{ duration: 0.5 }}>
            {t("courses_title")}
          </motion.h3>
        </motion.div>
        <div className={styles.courses_main_text}>
          <p>{t("courses_description1")}</p>
          <p>{t("courses_description2")}</p>
          <ul>
            <li>{t("courses_welding")}</li>
            <li>{t("courses_plumbing")}</li>
            <li>{t("courses_individual")}</li>
            <li>{t("courses_certification")}</li>
          </ul>
          <p>{t("courses_audience")}</p>
          <a href="https://www.ehitajatekoolituskeskus.ee/" target="_blank">
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              variants={animationb}
              transition={{ duration: 0.75 }}
            >
              {t("courses_cta")}
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}
