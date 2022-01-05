import { useEffect, useState } from "react";
import { API_KEY } from "../constant/consttant";

export const useCurrentWeather = () => {
	const [error, setError] = useState(null);

	const [name, setName] = useState("Elbląg");
	const [data, setData] = useState([]);

	const handleChange = e => {
		setName(e.target.value);
	};

	const fetchData = async () => {
		try {
			if (!name) return setError("Name is incorrect");
			const response = await fetch(
				`https://api.weatherbit.io/v2.0/current?lang=pl&city=${name}&key=${API_KEY}&include=minutely`
			);
			const responseJson = await response.json();
			if (response) {
				setData(responseJson.data);
			}
		} catch (error) {
			setError("We can not find this city");
		}
	};

	console.log(error);
	useEffect(() => {
		fetchData();
	}, []);

	return { error, handleChange, data, fetchData };
};
