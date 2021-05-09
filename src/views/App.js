import React from "react";
import Header from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import styles from "./App.module.scss";

// async function getData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
