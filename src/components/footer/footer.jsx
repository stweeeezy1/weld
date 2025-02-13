import styles from "/src/components/footer/footer.module.css";
import { useLanguage } from "/src/useLanguage.js";

export default function Footer() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_main}>
        <div className={styles.footer_left_info}>
          <div className={styles.footer_left_left_info}>
            <img src="/public/locales/assets/logo.png" alt="#" />
            <h3>©MethodX</h3>
            <p>
              informatsioon24.7@gmail.com <br />
            </p>
            <p>
              Pae 29 <br />
              11414 Tallinn, Eesti
            </p>
          </div>
          <iframe
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.179041892367!2d24.81238918466605!3d59.432182780193926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692ed9e426d7c8f%3A0x668461d6a7f5e79c!2sO%C3%9C%20A1koolitus.ee!5e1!3m2!1set!2see!4v1739467777707!5m2!1set!2see"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
