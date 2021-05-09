import styles from "./Description.module.scss";
import slonce from "../../../assets/slonce.jpg";

export const Description = ({ main, description, wind, temp }) => {
  const converterTemp = (temp / 14).toFixed(0);
  return (
    <section className={styles.wrapper}>
      <div className={styles.temperatura__wrapper}>
        <p className={styles.temperature}>{converterTemp} °C </p>
      </div>
      <img src={slonce} className={styles.wheatherSymbole} alt="słońce"></img>
      <div className={styles.description}>
        <span className={styles.description__items}>{main}</span>
        <span className={styles.description__items}>{description}</span>
        <span className={styles.description__items}> wind: {wind} m/s</span>
      </div>
    </section>
  );
};
