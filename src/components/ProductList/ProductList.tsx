import React from "react";
import { Product } from "..";

const ProductList: React.FC<ProductListProps> = (props) => {
  const {} = props;
  const listOfProducts = [
    { name: "apple" },
    { name: "orange" },
    { name: "grape" },
    { name: "grape" },
    { name: "grape" },
    { name: "grape" },
  ];
  const mappedList = listOfProducts.map((product) => <Product />);
  return <div className="product_list">{mappedList}</div>;
};

export default ProductList;
