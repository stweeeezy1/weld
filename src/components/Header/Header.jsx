import styles from "/src/components/Header/Header.module.css";
import { useState } from "react";
import { useLanguage } from "/src/useLanguage.js";
import { useScrollToSection } from "/src/useScrollToSection";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const animationp = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const animationb = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const scrollToSection = useScrollToSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      id="home"
      className={styles.header_container}
    >
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
          <motion.h1 variants={animation} transition={{ duration: 0.75 }}>
            {t("head_main")}
          </motion.h1>
          <motion.h3 variants={animationp} transition={{ duration: 1 }}>
            {t("head_second")}
          </motion.h3>
          <motion.button variants={animationb} transition={{ duration: 1.25 }}>
            {t("head_button")}
          </motion.button>
        </div>
        <img
          src="/assets/main.png"
          alt="main"
          className={styles.header_main_image}
        />
      </div>
    </motion.header>
  );
}
