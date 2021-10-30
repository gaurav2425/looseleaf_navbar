import React, { useState } from "react";
import styles from "./PriceBar.module.css";
import { Add, Remove } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
function PriceBar() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.pricebar_container}>
      <div className={styles.pricebar_container1}>
        <h1>How does Looseleaf’s pricing work??</h1>
        <div
          className={styles.add_icon_container}
          onClick={() => setShow(!show)}
        >
          {show ? <Remove></Remove> : <Add className="add_icon"></Add>}
        </div>
      </div>
      {show ? (
        <div className={styles.pricebar_container2}>
          <h2>
            How does Looseleaf’s pricing work? Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default PriceBar;
