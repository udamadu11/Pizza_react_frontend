import React, { useState } from "react";
import Styles from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productAdd, productInsert } from "../../Store/Actions/ProductActions";

function Products({ heading, data }) {
  const dispatch = useDispatch();
  dispatch(productInsert(data));

  const handleCart = (id) => {
    console.log(id);
    dispatch(productAdd(id));
  };

  const p = useSelector((state) => state.products.products);

  return (
    <div className={Styles.container}>
      <p className={Styles.heading}>{heading}</p>
      <div className={Styles.product}>
        {p.map((data, index) => {
          const { name, price, desc, image, button, id } = data;
          return (
            <div className={Styles.card}>
              <img src={`./img/${image}`} className={Styles.img} />
              <div className={Styles.productInfo}>
                <p className={Styles.title}>{name}</p>
                <p className={Styles.desc}>{desc}</p>
                <p className={Styles.price}>{price}</p>
                <button className={Styles.btn} onClick={() => handleCart(id)}>
                  {button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
