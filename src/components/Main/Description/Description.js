import styles from "./Description.module.scss";

export const Description = ({
	app_temp,
	weather,
	wind_spd,
	wind_cdir_full,
}) => {
	const converterWind = (wind_spd * 3.6).toFixed(0);
	const converterTemp = app_temp.toFixed(0);
	return (
		<section className={styles.wrapper}>
			<div className={styles.temperatura__wrapper}>
				<p className={styles.temperature}>{converterTemp} °C </p>
			</div>
			<img
				src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png

        `}
				className={styles.wheatherSymbole}
				alt='icon current wheater'></img>
			<div className={styles.description}>
				<span className={styles.description__items}>{weather.description}</span>
				<span className={styles.description__items}>
					Kierunek wiatru: {wind_cdir_full}
				</span>
				<span className={styles.description__items}>
					wiatr: {converterWind} km/h
				</span>
			</div>
		</section>
	);
};
