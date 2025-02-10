import styles from "/src/components/Info/Info.module.css";
import { useLanguage } from "/src/useLanguage.js";

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
        <div className={styles.info_company_numbers}>
          <div className={styles.info_stat}>
            <h1>10</h1>
            <p>{t("welding_directions")}</p>
          </div>
          <div className={styles.info_stat}>
            <h1>20</h1>
            <p>{t("schools_with_welding")}</p>
          </div>
          <div className={styles.info_stat}>
            <h1>100</h1>
            <p>{t("qualified_teachers")}</p>
          </div>
          <div className={styles.info_stat}>
            <div className={styles.info_forth}>
              <h1>10000</h1>
              <p>{t("trained_people")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
