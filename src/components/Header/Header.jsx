import styles from "/src/components/Header/Header.module.css";
import { useState } from "react";
import { useLanguage } from "/src/useLanguage.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.menu_icon} onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ""}`}>
          <ul>
            <li>{t("home")}</li>
            <li>{t("services")}</li>
            <li>{t("courses")}</li>
            <li>{t("portfolio")}</li>
            <li>{t("cooperate")}</li>
            <li>{t("contacts")}</li>
            <li>
              <button onClick={toggleLanguage} className={styles.lang}>
                {language}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.header_main}>
        <div className={styles.header_main_text}>
          <h1>{t("head_main")}</h1>
          <h3>{t("head_second")}</h3>
          <button>{t("head_button")}</button>
        </div>
        <img
          src="/assets/main.png"
          alt="main"
          className={styles.header_main_image}
        />
      </div>
    </header>
  );
}
