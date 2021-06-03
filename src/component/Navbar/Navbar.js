import React from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";
import { FaPizzaSlice } from "react-icons/fa";
function Navbar({ toggle }) {
  console.log(toggle);
  return (
    <div className={Styles.navbar}>
      <Link to="/" className={Styles.navlink}>
        Pizza
      </Link>
      <div className={Styles.navicon} onClick={toggle}>
        <p>Menu</p>
        <FaPizzaSlice className={Styles.icon} />
      </div>
    </div>
  );
}

export default Navbar;
