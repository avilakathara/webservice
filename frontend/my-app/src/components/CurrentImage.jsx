import styles from "./CurrentImage.module.css";

export default function CurrentImage({ imageSrc, onFakeGenerate }) {
  return (
    <section className={styles.card}>
      <div className={styles.imageContainer}>
        {imageSrc ? (
          <img className={styles.img} src={imageSrc} alt="Generated" />
        ) : (
          <div className={styles.placeholder}>Generated Image</div>
        )}
      </div>

      <button className={styles.btn} onClick={onFakeGenerate}>
        Fake Generate (push current into history)
      </button>
    </section>
  );
}
