import styles from "/src/components/Header/Header.module.css";
import { useState } from "react";
import { useLanguage } from "/src/useLanguage.js";
import { useScrollToSection } from "/src/useScrollToSection";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const scrollToSection = useScrollToSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header id="home" className={styles.header_container}>
      <div className={styles.header}>
        <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.menu_icon} onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ""}`}>
          <ul>
            <li onClick={() => scrollToSection("home")}>{t("home")}</li>
            <li onClick={() => scrollToSection("services")}>{t("services")}</li>
            <li onClick={() => scrollToSection("courses")}>{t("courses")}</li>
            <li onClick={() => scrollToSection("portfolio")}>
              {t("portfolio")}
            </li>
            <li onClick={() => scrollToSection("cooperate")}>
              {t("cooperate")}
            </li>
            <li onClick={() => scrollToSection("contacts")}>{t("contacts")}</li>
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
