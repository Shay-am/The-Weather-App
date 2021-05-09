import React, { useState, useEffect } from "react";
import { Date } from "./Date/Date";

import { Description } from "./Description/Description";
import { Input } from "./Input/Input";
import styles from "./Main.module.scss";

const APIKey = "44ceb40dac2f70d57e392f21fbb9a6ed";

export const Main = () => {
  // const [error, setError] = useState(null);
  const [data2, setData2] = useState([]);
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [wind, setWind] = useState("");
  const [name, setName] = useState("");
  const [weather, setWeather] = useState([]);

  const handleInputChange = (e) => setText(e.target.value);
  const getData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIKey}`
      );
      const resJson = await response.json();
      if (!resJson) {
        console.log("nie działa");
      } else {
        setData2(resJson);

        setData(resJson.main.temp_min);
        setName(resJson.name);
        setWeather(resJson.weather);
        setWind(resJson.wind.speed);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => getData());

  return (
    <>
      <Input handleInputChange={handleInputChange} getData={getData} />

      <main className={styles.wrapper}>
        <Date name={name} />
        {weather.map((items) => (
          <Description key={items.id} {...items} wind={wind} temp={data} />
        ))}
      </main>
    </>
  );
};
