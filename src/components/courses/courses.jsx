import styles from "/src/components/courses/courses.module.css";

export default function Courses() {
  return (
    <div className={styles.courses_container}>
      <div className={styles.courses_main}>
        <div className={styles.courses_header}>
          <h1>Курсы</h1>
          <h3>Профессиональное обучение сварщикам и сантехникам</h3>
        </div>
        <div className={styles.courses_main_text}>
          <p>
            Мы предлагаем курсы по сварке и сантехнике, которые помогут вам
            освоить <br />{" "}
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
        <button>Узнать больше</button>
      </div>
    </div>
  );
}
