import styles from "/src/components/Portfolio/Portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.portfolio_container}>
      <div className={styles.portfolio_container_main}>
        <div className={styles.portfolio_head}>
          <h1>Портфолио</h1>
        </div>
        <div className={styles.portfolio_main}>
          <div className={styles.portfolio_images}></div>
          <div className={styles.portfolio_images}></div>
          <div className={styles.portfolio_images}></div>
        </div>
        <div className={styles.portfolio_main_text}>
          <p>
            Мы предлагаем курсы по сварке и сантехнике, которые помогут вам
            освоить <br />
            <b>востребованные профессии и получить практические навыки.</b>
          </p>
          <ul>
            <li>Курсы сварщика (MMA, TIG, MIG/MAG)</li>
            <li>Курсы сантехника</li>
            <li>Индивидуальные занятия</li>
            <li>Сертификация по окончании курса</li>
          </ul>
          <p>
            Наши курсы рассчитаны как на <b>начинающих</b>, так и на
            специалистов, желающих <b>повысить квалификацию.</b>
          </p>
        </div>
      </div>
    </div>
  );
}
