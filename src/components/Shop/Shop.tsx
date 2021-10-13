import React from "react";
import { Filter, ProductList } from "..";

const Shop: React.FC<ShopProps> = (props) => {
  const { title, subTitle } = props;

  return (
    <div className="shop">
      <div className="shop__title">
        <h2>{title}</h2>
        <h2>/ {subTitle}</h2>
      </div>
      <div className="shop__main">
        <Filter />
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
