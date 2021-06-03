import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Styes from "./content.module.css";
function Content(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={Styes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

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
