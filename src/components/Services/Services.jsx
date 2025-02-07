import styles from "./Services.module.css";

export default function Services() {
  return (
    <>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesContainerMain}>
          <div className={styles.servicesInfo}>
            <h1>Наши услуги</h1>
            <p>
              Профессиональные сварочные и сантехнические услуги – качество,
              надёжность, опыт!
            </p>
          </div>

          <div className={styles.servicesBlock1}>
            <h2 className={styles.blockHead1}>Виды сварочных работ</h2>
            <p className={styles.blockInfo1}>
              Изготовление и монтаж металлоконструкций: лестницы, заборы,
              каркасы для строительства и благоустройства. Виды сварки:
              аргонодуговая, полуавтоматическая, электросварка для соединения
              металлов с высокой точностью.
            </p>
          </div>

          <div className={styles.twoBlocksContainer}>
            <div className={styles.servicesBlock2}>
              <h2 className={styles.blockHead2}>Сантехнические работы</h2>
              <div className={styles.blockInfo2}>
                <p>Монтаж и ремонт водопровода, отопления, канализации.</p>
                <p>Установка сантехники (краны, фильтры, тёплые полы).</p>
              </div>
            </div>

            <div className={styles.servicesBlock3}>
              <h2 className={styles.blockHead3}>Обучение и консультации</h2>
              <div className={styles.blockInfo3}>
                <p>Курсы сварщика и сантехника (MMA, TIG, MIG/MAG).</p>
                <p>Индивидуальные занятия и сертификация.</p>
              </div>
            </div>
          </div>

          <div className={styles.servicesBlock4}>
            <h2 className={styles.blockHead4}>Дополнительно</h2>
            <div className={styles.blockInfo4}>
              <p>
                Выездной сервис – выполнение сварочных и сантехнических работ на
                объекте клиента.
              </p>
              <p>
                Поставка материалов и оборудования – продажа и аренда сварочного
                и сантехнического инструмента.
              </p>
              <p>
                Гарантийное и постгарантийное обслуживание – контроль качества
                сварных соединений и сантехнических систем.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.plus_bg}></div>
    </>
  );
}
