import React, { useState } from "react";
import styles from "./TalkBar.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
function TalkBar({ title }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.talkbar_container}>
      <div className={styles.talkbar_container_upper}>
        <div className={styles.talkbar_txtcontainer}>
          <h1>{title}</h1>
        </div>

        {show ? (
          <IconButton onClick={() => setShow(!show)}>
            <KeyboardArrowUp></KeyboardArrowUp>
          </IconButton>
        ) : (
          <IconButton onClick={() => setShow(!show)}>
            <KeyboardArrowDown></KeyboardArrowDown>
          </IconButton>
        )}
      </div>

      {show ? (
        <div className={styles.talkbar_container_down}>
          <h2>
            All the files and links shared to you by your instructor in one
            place.
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default TalkBar;
