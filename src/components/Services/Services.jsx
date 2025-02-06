import styles from "./Services.module.css";
import { servicesData } from "./data";

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContainerMain}>
        <div className={styles.servicesInfo}>
          <h1>{servicesData.title}</h1>
          <p>{servicesData.description}</p>
        </div>

        {servicesData.blocks
          .filter((block) => block.id === 1)
          .map((block) => (
            <div key={block.id} className={styles[`servicesBlock${block.id}`]}>
              <p className={styles[`blockHead${block.id}`]}>{block.title}</p>
              {Array.isArray(block.content) ? (
                <p className={styles[`blockInfo${block.id}`]}>
                  {block.content.map((item, index) => (
                    <div key={`${block.id}-${index}`}>{item}</div>
                  ))}
                </p>
              ) : (
                <p className={styles[`blockInfo${block.id}`]}>
                  {block.content}
                </p>
              )}
            </div>
          ))}

        <div className={styles.twoBlocksContainer}>
          {servicesData.blocks
            .filter((block) => block.id === 2 || block.id === 3)
            .map((block) => (
              <div
                key={block.id}
                className={styles[`servicesBlock${block.id}`]}
              >
                <p className={styles[`blockHead${block.id}`]}>{block.title}</p>
                {Array.isArray(block.content) ? (
                  <p className={styles[`blockInfo${block.id}`]}>
                    {block.content.map((item, index) => (
                      <div key={`${block.id}-${index}`}>{item}</div>
                    ))}
                  </p>
                ) : (
                  <p className={styles[`blockInfo${block.id}`]}>
                    {block.content}
                  </p>
                )}
              </div>
            ))}
        </div>

        {servicesData.blocks
          .filter((block) => block.id === 4)
          .map((block) => (
            <div key={block.id} className={styles[`servicesBlock${block.id}`]}>
              <p className={styles[`blockHead${block.id}`]}>{block.title}</p>
              {Array.isArray(block.content) ? (
                <p className={styles[`blockInfo${block.id}`]}>
                  {block.content.map((item, index) => (
                    <div key={`${block.id}-${index}`}>{item}</div>
                  ))}
                </p>
              ) : (
                <p className={styles[`blockInfo${block.id}`]}>
                  {block.content}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
