import React from "react";

import styles from "../styles/index.module.css";

export default function IndexPage() {
  return (
    <div>
      <div className={styles.test}></div>
      <div>
        {['image.jpg', 'image.png'].map((src) => (
          <img src={require(`../styles/${src}`)} />
        ))}
      </div>
    </div>
  );
}
