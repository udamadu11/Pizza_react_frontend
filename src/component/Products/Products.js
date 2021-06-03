import React from "react";
import Styles from "./products.module.css";
function Products({ heading, data }) {
  return (
    <div className={Styles.container}>
      <p className={Styles.heading}>{heading}</p>
      <div className={Styles.product}>
        {data.map((data, index) => {
          const { name, price, desc, image, button } = data;
          return (
            <div className={Styles.card}>
              <img src={`./img/${image}`} className={Styles.img} />
              <div className={Styles.productInfo}>
                <p className={Styles.title}>{name}</p>
                <p className={Styles.desc}>{desc}</p>
                <p className={Styles.price}>{price}</p>
                <button className={Styles.btn}>{button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
