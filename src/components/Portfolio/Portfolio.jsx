import styles from "/src/components/Portfolio/Portfolio.module.css";
import { useLanguage } from "/src/useLanguage.js";

export default function Portfolio() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <div className={styles.portfolio_container}>
      <div className={styles.portfolio_container_main}>
        <div className={styles.portfolio_head}>
          <h1>{t("courses_portfolio")}</h1>
        </div>
        <div className={styles.portfolio_main}>
          <img
            className={styles.portfolio_images}
            src="./assets/first.jpg"
            href="House"
          ></img>
          <img
            className={styles.portfolio_images}
            src="./assets/second.jpg"
            href="products"
          ></img>
          <img
            className={styles.portfolio_images}
            src="./assets/third.jpg"
            href="products"
          ></img>
        </div>
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
