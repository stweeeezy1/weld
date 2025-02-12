import styles from "/src/components/Portfolio/Portfolio.module.css";
import { useLanguage } from "/src/useLanguage.js";
import { animationB4, animationB2 } from "/src/animation.js";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <div id="portfolio" className={styles.portfolio_container}>
      <div className={styles.portfolio_container_main}>
        <div className={styles.portfolio_head}>
          <h1>{t("courses_portfolio")}</h1>
        </div>
        <motion.div
          className={styles.portfolio_main}
          initial="hidden"
          whileInView="visible"
        >
          <motion.img
            variants={animationB2}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src="./assets/first.jpg"
            href="House"
          ></motion.img>
          <motion.img
            variants={animationB4}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src="./assets/second.jpg"
            href="products"
          ></motion.img>
          <motion.img
            variants={animationB2}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src="./assets/third.jpg"
            href="products"
          ></motion.img>
        </motion.div>
        <div className={styles.portfolio_main_text}>
          <p className={styles.portfolio_desc}>{t("courses_description")}</p>
          <ul>
            <li>{t("courses_welding")}</li>
            <li>{t("courses_plumbing")}</li>
            <li>{t("courses_individual")}</li>
            <li>{t("courses_certification")}</li>
          </ul>
          <p>{t("courses_audience")}</p>
        </div>
      </div>
    </div>
  );
}
