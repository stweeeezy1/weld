import styles from "./loading.module.css";

export default function Loading() {
  console.log("sigma");

  return (
    <div className={styles.loader}>
      <div className={styles.dot}>·</div>
      <div className={styles.dot}>·</div>
      <div className={styles.dot}>·</div>
    </div>
  );
}
