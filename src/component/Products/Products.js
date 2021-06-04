import React from "react";
import Styles from "./products.module.css";
import { useDispatch } from "react-redux";
import { productAdd } from "../../Store/Actions/ProductActions";

function Products({ heading, data }) {
  const dispatch = useDispatch();

  const handleCart = (name, desc, price, image, id) => {
    console.log(name, desc, price, image, id);
    dispatch(productAdd(name, desc, price, image, id));
  };
  return (
    <div className={Styles.container}>
      <p className={Styles.heading}>{heading}</p>
      <div className={Styles.product}>
        {data.map((data, index) => {
          const { name, price, desc, image, button, id } = data;
          return (
            <div className={Styles.card}>
              <img src={`./img/${image}`} className={Styles.img} />
              <div className={Styles.productInfo}>
                <p className={Styles.title}>{name}</p>
                <p className={Styles.desc}>{desc}</p>
                <p className={Styles.price}>{price}</p>
                <button
                  className={Styles.btn}
                  onClick={(e) => handleCart(name, desc, price, image, id)}
                >
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
