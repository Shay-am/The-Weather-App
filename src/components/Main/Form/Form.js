import styles from "./Form.module.scss";

export const Form = ({ handleInputChange, getData }) => {
	return (
		<div>
			<label htmlFor='input' />
			<input
				type='text'
				className={styles.input}
				id='input'
				name='inputWeather'
				placeholder='wpisz miasto'
				onChange={handleInputChange}
			/>
			<button type='submit' className={styles.button} onClick={getData}>
				Submit
			</button>
		</div>
	);
};
