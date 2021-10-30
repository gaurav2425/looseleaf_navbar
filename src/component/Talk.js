import React from "react";
import styles from "./Talk.module.css";
import TalkBar from "./TalkBar";

function Talk() {
  return (
    <div className={styles.talk_container}>
      <div className={styles.talk_txt}>
        <h1>Talk the way you want, whenever you want</h1>
        <h2>
          Looseleaf is built for everyone so you can get your work done the way
          you want.
        </h2>
      </div>
      <div className={styles.talk_container2}>
        <div className={styles.talk_container2_left}></div>
        <div className={styles.talk_container2_right}>
          <TalkBar title="Channels"></TalkBar>
          <TalkBar title="Timeline"></TalkBar>
          <TalkBar title="Dashboard"></TalkBar>
          <TalkBar title="Resources"></TalkBar>
        </div>
      </div>
    </div>
  );
}

export default Talk;
