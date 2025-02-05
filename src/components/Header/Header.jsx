import styles from "/src/components/Header/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
          <nav className={styles.nav}>
            <ul>
              <li>Главная</li>
              <li>Услуги</li>
              <li>Курсы</li>
              <li>Портфолио</li>
              <li>Сотрудничать</li>
              <li>Контакты</li>
            </ul>
          </nav>
        </div>
        <div className={styles.header_main}>
          <div className={styles.header_main_text}>
            <h1>
              Обучение и услуги по <br /> сварке и сантехнике
            </h1>
            <h3>
              Профессиональное обучение и услуги в сфере сварки и сантехники –
              более 10 лет опыта.
            </h3>
            <button>Напиши нам</button>
          </div>
          <img
            src="/assets/main.png"
            alt="main"
            className={styles.header_main_image}
          />
        </div>
      </header>
    </>
  );
}
