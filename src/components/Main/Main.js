import React, { useState } from "react";
import { Date } from "./Date/Date";

import { Description } from "./Description/Description";
import { Input } from "./Input/Input";
import styles from "./Main.module.scss";

const API_KEY = "7aabe2761b524f5a889fafd05730ae8e";

export const Main = () => {
  const [error, setError] = useState(null);

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => setText(e.target.value);

  const getData = async () => {
    try {
      setError({});
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?lang=pl&city=${text}&key=${API_KEY}&include=minutely`
      );

      const responseJson = await response.json();
      if (!responseJson) {
        return console.log("nie ma takiego miasta");
      }
      return setData(responseJson.data);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return (
    <>
      <Input handleInputChange={handleInputChange} getData={getData} />
      {data.map((items, index) => (
        <main className={styles.wrapper}>
          <Date key={items.city_name} {...items} />
          <Description key={index} {...items} />
        </main>
      ))}
    </>
  );
};
