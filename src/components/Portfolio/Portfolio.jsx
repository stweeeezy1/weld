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
          <h3>{t("courses_portfolio2")}</h3>
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
            src="/dist/assets/first.jpg"
            href="House"
          ></motion.img>
          <motion.img
            variants={animationB4}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src="/dist/assets/second.jpg"
            href="products"
          ></motion.img>
          <motion.img
            variants={animationB2}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src="/dist/assets/third.jpg"
            href="products"
          ></motion.img>
        </motion.div>
        <div className={styles.portfolio_main_text}>
          <p className={styles.portfolio_desc}>{t("portfolio_description")}</p>
          <p className={styles.portfolio_desc}>{t("portfolio_description1")}</p>
          <ul>
            <li>{t("portfolio_welding")}</li>
            <li>{t("portfolio_plumbing")}</li>
            <li>{t("portfolio_individual")}</li>
          </ul>
          <p>{t("portfolio_audience")}</p>
        </div>
      </div>
    </div>
  );
}
