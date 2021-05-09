import React from "react";
import Moment from "react-moment";
import styles from "./Date.module.scss";

export const Date = ({ name }) => {
  return (
    <div className={styles.date}>
      <p className={styles.name}>{name} </p>
      <Moment format="DD:MMM:YYYY"></Moment>
    </div>
  );
};
