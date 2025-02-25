import styles from "/src/components/footer/footer.module.css";
import { useLanguage } from "/src/useLanguage.js";
import footerImg from "/src/assets/logo.png";

export default function Footer() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_main}>
        <div className={styles.footer_left_info}>
          <div className={styles.footer_left_left_info}>
            <img src={footerImg} alt="#" />
            <h3>©MethodX</h3>
            <p>
              informatsioon24.7@gmail.com <br />
            </p>
            <p>
              +372 5818 6715
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
