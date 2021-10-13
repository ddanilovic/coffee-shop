import React from "react";
import forest from "../../assets/img/forest.jpg";
import Button from "../Button/Button";

const Product: React.FC<ProductProps> = (props) => {
  //   const { logo, rightIcon } = props;

  return (
    <div className="product">
      <div className="product__box_top">
        <div className="product__box_top__image">
          <img src={forest} alt="forest" />
        </div>
        <div className="product__box_top__button">
          <Button color="black" text="add to cart" />
        </div>
      </div>
      <div className="product__box_bottom">
        <h5>category</h5>
        <h3>name</h3>
        <h4>$price</h4>
      </div>
    </div>
  );
};

export default Product;
