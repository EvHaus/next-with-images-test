import React from "react";

import styles from "../styles/index.module.css";

export default function IndexPage() {
  return (
    <div>
      <div className={styles.test}></div>
      <div>
        <img src={require("../styles/image.jpg")} />
        <img src={require("../styles/image.png")} />
      </div>
    </div>
  );
}
