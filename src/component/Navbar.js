import React from "react";
import styles from "./Navbar.module.css";
import logo from "../logo.png";
function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_left}>
        <img src={logo}></img>
        <h1>looseleaf</h1>
        <logo></logo>
      </div>
      <div className={styles.navbar_right}>
        <ul>
          <li>Why Looseleaf ?</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blogs</li>
        </ul>
        <div className={styles.navbar_buttons}>
          <div className={styles.navbar_button1}>TALK TO SALES</div>
          <div className={styles.navbar_button2}>LAUNCH LOOSELEAF</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
