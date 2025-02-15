import styles from "/src/components/Portfolio/Portfolio.module.css";
import { useLanguage } from "/src/useLanguage.js";
import { animationB4, animationB2 } from "/src/animation.js";
import { motion } from "framer-motion";
import image1 from "/src/assets/first.jpg";
import image2 from "/src/assets/second.jpg";
import image3 from "/src/assets/third.jpg";

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
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <motion.img
            variants={animationB2}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src={image1}
            href="House"
          ></motion.img>
          <motion.img
            variants={animationB4}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src={image2}
            href="products"
          ></motion.img>
          <motion.img
            variants={animationB2}
            transition={{ duration: 1 }}
            className={styles.portfolio_images}
            src={image3}
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
