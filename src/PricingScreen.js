import React from "react";
import PriceBar from "./component/PriceBar";
import styles from "./component/PricingScreen.module.css";
function PricingScreen() {
  return (
    <div className={styles.pricing_screen_container}>
      <div className={styles.pricing_screen_container_bars}>
        <div className={styles.pricing_screen_container_head}>
          <h1>Commonly Asked Questions</h1>
        </div>
        <PriceBar></PriceBar>
        <PriceBar></PriceBar>
        <PriceBar></PriceBar>
        <PriceBar></PriceBar>
        <PriceBar></PriceBar>
      </div>
    </div>
  );
}

export default PricingScreen;
