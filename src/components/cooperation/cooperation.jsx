import styles from "/src/components/cooperation/cooperation.module.css";

export default function Cooperation() {
  return (
    <div id="cooperate" className={styles.cooperation_container}>
      <div className={styles.cooperation_main}>
        <div className={styles.cooperation_header}>
          <h1>Сотрудничество</h1>
          <h3>Наладьте с нами долгосрочное партнерство</h3>
        </div>
        <div className={styles.cooperation_main_text}>
          <p>
            Мы предлагаем выгодное сотрудничество в области сварки и
            сантехнических услуг. <br /> Если вы представляете компанию и
            нуждаетесь в надежных партнерах <br /> для выполнения работ или
            обучения сотрудников, мы готовы предложить вам:
          </p>
          <ul>
            <li>Специальные условия для корпоративных клиентов</li>
            <li>Выездной сервис и техническую поддержку</li>
            <li>Поставка материалов и оборудования</li>
            <li>
              Профессиональные консультации по выбору и установке оборудования
            </li>
          </ul>
          <p>
            Будем рады обсудить возможности <b>сотрудничества!</b>
          </p>
        </div>
        <button>Связаться</button>
      </div>
    </div>
  );
}
