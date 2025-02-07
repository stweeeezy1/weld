import styles from "/src/components/Info/Info.module.css";

export default function Info() {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_company}>
        <div className={styles.info_company_text}>
          <p>
            <b>MethodX</b> – платформа для обучения и подготовки <br />
            квалифицированных специалистов в сфере сварки и сантехнических{" "}
            <br />
            работ, а также предоставления профессиональных услуг.
          </p>
        </div>
        <div className={styles.info_company_numbers}>
          <div className={styles.info_stat}>
            <h1>10</h1>
            <p>
              по различным направлениям
              <br /> по сварке
            </p>
          </div>
          <div className={styles.info_stat}>
            <h1>20</h1>
            <p>
              Школ, в которых запущена <br /> сварка
            </p>
          </div>
          <div className={styles.info_stat}>
            <h1>100</h1>
            <p>
              Педагогов прошедших <br /> курсы повышения <br /> квалификации
            </p>
          </div>
          <div className={styles.info_stat}>
            <h1>10000</h1>
            <p>
              Обученных людей на базе <br /> собственных центров
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
