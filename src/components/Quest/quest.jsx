import styles from "/src/components/Quest/quest.module.css";
import { animation, animationb } from "/src/animation.js";
import { motion } from "framer-motion";
import { useLanguage } from "/src/useLanguage.js";

export default function Quest() {
  const { t } = useLanguage();

  return (
    <div id="contacts" className={styles.quest_container}>
      <div className={styles.quest_main}>
        <div className={styles.quest_header}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={animation}
            transition={{ duration: 1 }}
          >
            {t("quest_first")}
          </motion.h1>
          <p>{t("quest_second")}</p>
          <p>{t("quest_main")}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          initial="hidden"
          whileInView="visible"
          variants={animationb}
          transition={{ duration: 1 }}
        >
          {t("cooperate_button")}
        </motion.button>
      </div>
    </div>
  );
}
