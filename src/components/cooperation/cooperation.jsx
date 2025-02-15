import styles from "/src/components/cooperation/cooperation.module.css";
import { animation, animationb, animationN } from "/src/animation.js";
import { motion } from "framer-motion";
import { useLanguage } from "/src/useLanguage.js";

export default function Cooperation() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <div id="cooperate" className={styles.cooperation_container}>
      <div className={styles.cooperation_main}>
        <motion.div
          className={styles.cooperation_header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <motion.h1 variants={animation} transition={{ duration: 0.75 }}>
            {t("cooperate_title")}
          </motion.h1>
          <motion.h3 variants={animationN} transition={{ duration: 0.75 }}>
            {t("cooperate_description1")}
          </motion.h3>
        </motion.div>
        <div className={styles.cooperation_main_text}>
          <p>{t("cooperate_description2")}</p>
          <ul>
            <li>{t("cooperate_offer1")}</li>
            <li>{t("cooperate_offer2")}</li>
            <li>{t("cooperate_offer4")}</li>
          </ul>
          <p>{t("cooperate_cta")}</p>
        </div>
        <a href="mailto:informatsioon24.7@gmail.com">
          <motion.button
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            initial="hidden"
            whileInView="visible"
            variants={animationb}
            transition={{ duration: 1 }}
          >
            {t("cooperate_button")}
          </motion.button>
        </a>
      </div>
    </div>
  );
}
