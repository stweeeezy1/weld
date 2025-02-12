import styles from "/src/components/footer/footer.module.css";
import { useLanguage } from "/src/useLanguage.js";

export default function Footer() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_main}>
        <div className={styles.footer_left_info}>
          <div className={styles.footer_left_left_info}>
            <img src="./assets/logo.png" alt="#" />
            <h3>©MethodX</h3>
            <p>
              Tallinn, vormsi 6 <br />
              +372 3434 2901 <br />
              example@example.com
            </p>
          </div>
          <iframe
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.0482174581236!2d24.868701360377468!3d59.45421451681629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692ece0aeb5da23%3A0xf0cd39012bb91540!2sTatjana%20Rudakova%20jaem%C3%BC%C3%BCk!5e1!3m2!1set!2see!4v1739368980608!5m2!1set!2see"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
