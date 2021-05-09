import styles from "./Input.module.scss";

export const Input = ({ handleInputChange, getData }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.input}
        placeholder="wpisz miasto"
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.button} onClick={getData}>
        Submit
      </button>
    </div>
  );
};
