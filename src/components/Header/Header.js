import React, { useState, useEffect } from "react";

import styles from "./Header.module.scss";

const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let timer = setInterval(() =>
      setTime(new Date().toLocaleTimeString(), 1000)
    );
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.h1}>The Weather App</h1>
      <div className={styles.time}>
        <p>{time}</p>
      </div>
    </header>
  );
};

export default Header;
