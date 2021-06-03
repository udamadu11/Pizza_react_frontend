import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";
function Sidebar({ isOpen, toggle }) {
  return (
    <div className={isOpen ? Styles.sidebar1 : Styles.sidebar2}>
      <div className={Styles.icon} onClick={toggle}>
        <CgClose className={Styles.closeIcon} />
      </div>
      <div className={Styles.menu}>
        <Link className={Styles.link} to="/">
          Pizzas
        </Link>
        <Link className={Styles.link} to="/">
          Dessets
        </Link>
        <Link className={Styles.link} to="/">
          Full Menu
        </Link>
      </div>
      <div className={Styles.sideButton}>
        <Link className={Styles.link2} to="/">
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
