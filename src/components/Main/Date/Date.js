import React from "react";
import Moment from "react-moment";
import styles from "./Date.module.scss";

export const Date = ({ timezone, city_name }) => {
  return (
    <div className={styles.date}>
      <span className={styles.name}>{city_name}</span>
      <span>{timezone}</span>
      <span>
        <Moment format="DD-MMM-YYYY"></Moment>
      </span>
    </div>
  );
};
