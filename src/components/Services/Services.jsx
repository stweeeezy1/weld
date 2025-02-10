import styles from "./Services.module.css";
import { useLanguage } from "/src/useLanguage.js";

export default function Services() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesContainerMain}>
          <div className={styles.servicesInfo}>
            <h1>{t("services_title")}</h1>
            <p>{t("services_description")}</p>
          </div>

          <div className={styles.servicesBlock1}>
            <h2 className={styles.blockHead1}>{t("welding_title")}</h2>
            <p className={styles.blockInfo1}>{t("welding_item")}</p>
          </div>

          <div className={styles.twoBlocksContainer}>
            <div className={styles.servicesBlock2}>
              <h2 className={styles.blockHead2}>{t("pipe_title")}</h2>
              <div className={styles.blockInfo2}>
                <p>{t("pipe_item1")}</p>
                <p>{t("pipe_item2")}</p>
              </div>
            </div>

            <div className={styles.servicesBlock3}>
              <h2 className={styles.blockHead3}>{t("learn_title")}</h2>
              <div className={styles.blockInfo3}>
                <p>{t("learn_item1")}</p>
                <p>{t("learn_item2")}</p>
              </div>
            </div>
          </div>

          <div className={styles.servicesBlock4}>
            <h2 className={styles.blockHead4}>{t("extra_title")}</h2>
            <div className={styles.blockInfo4}>
              <p>{t("extra_item1")}</p>
              <p>{t("extra_item2")}</p>
              <p>{t("extra_item3")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.plus_bg}></div>
    </>
  );
}
