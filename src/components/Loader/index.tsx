import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader__block}>
      <img
        className={styles.loader__img}
        src="https://i.gifer.com/ZKZg.gif"
        alt="Loading..."
      />
    </div>
  );
};
