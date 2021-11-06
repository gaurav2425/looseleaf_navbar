import React from "react";
import Styles from "../component/TalkToSales.module.css";
function TalkToSales() {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerheading}>
        <h1>Let get in Contact</h1>
      </div>
      <div className={Styles.inputcontainer1}>
        <input placeholder="Your Name"></input>
        <input placeholder="Email Address"></input>
      </div>
      <div className={Styles.inputcontainer2}>
        <input placeholder="Phone Number"></input>
        <input placeholder="Instution Name"></input>
      </div>
      <div className={Styles.inputcontainer3}>
        <input placeholder="How Can We help You?"></input>
      </div>
      <div className={Styles.button}>
        <button>Submit your Request</button>
      </div>
    </div>
  );
}

export default TalkToSales;
