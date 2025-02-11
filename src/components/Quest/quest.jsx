import styles from "/src/components/Quest/quest.module.css";

export default function Quest() {
  return (
    <div id="contacts" className={styles.quest_container}>
      <div className={styles.quest_main}>
        <div className={styles.quest_header}>
          <h1>
            Остались вопросы? <br /> Свяжитесь с нами
          </h1>
          <p>
            Есть вопросы по сварочным или сантехническим работам? <br /> Нужна
            консультация? <br /> <b>Наши специалисты готовы помочь!</b> <br />
          </p>
          <p>
            Напишите или позвоните нам и мы свяжемся с вами в ближайшее время,
            чтобы предоставить персональные рекомендации и помочь выбрать
            услуги, которые подойдут именно вам. Доверьте свою задачу
            профессионалам!
          </p>
        </div>

        <button>Связаться</button>
      </div>
    </div>
  );
}
