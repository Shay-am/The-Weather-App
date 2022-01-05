import React from "react";
import { Date } from "./Date/Date";

import { Description } from "./Description/Description";
import { Form } from "./Form/Form";
import styles from "./Main.module.scss";
import { useCurrentWeather } from "../../services/getCurrentWeather";

export const Main = () => {
	const { data, handleChange, error, fetchData } = useCurrentWeather();

	return (
		<>
			<Form handleInputChange={handleChange} getData={fetchData} />
			{data.map((items, index) => (
				<main className={styles.wrapper}>
					<Date key={items.city_name} {...items} />
					<Description key={items.count} {...items} />
				</main>
			))}
		</>
	);
};
