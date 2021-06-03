import React from "react";
import Navbar from "../Navbar/Navbar";
import Styes from "./content.module.css";
function Content(props) {
  return (
    <div className={Styes.container}>
      <Navbar />
      <div className={Styes.content}>
        <div className={Styes.items}>
          <h1>Great Pizza Ever</h1>
          <p>Ready in 10 min</p>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
