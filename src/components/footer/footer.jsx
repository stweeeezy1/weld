import styles from "/src/components/footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_main}>
        <div className={styles.footer_left_info}>
          <img src="./assets/logo.png" alt="#" />
          <h3>
            © 2025 MethodX. <br /> Все права защищены.
          </h3>
          <p>
            Tallinn, vormsi 6 <br />
            +372 3434 2901 <br />
            example@example.com
          </p>
        </div>
        <div className={styles.footer_right_info}>
          <p className={styles.footer_info}>
            Обучение и услуги по сварке и сантехнике <br /> Курсы сварщиков и
            сантехников Сварочные и сантехнические работы <br /> Выездные услуги
            и поставка оборудования
          </p>
          <p className={styles.footer_social}>Мы в соцсетях:</p>
        </div>
      </div>
    </div>
  );
}
