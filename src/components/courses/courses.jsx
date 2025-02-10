import styles from "/src/components/courses/courses.module.css";
import { useLanguage } from "/src/useLanguage.js";

export default function Courses() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <div className={styles.courses_container}>
      <div className={styles.courses_main}>
        <div className={styles.courses_header}>
          <h1>{t("courses_main")}</h1>
          <h3>{t("courses_title")}</h3>
        </div>
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
        </div>
        <button>{t("courses_cta")}</button>
      </div>
    </div>
  );
}
