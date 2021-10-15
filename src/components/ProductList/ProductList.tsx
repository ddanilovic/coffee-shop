import React from "react"
import { Product } from ".."

const ProductList: React.FC<ProductListProps> = props => {
  const mappedList = props.displayProducts.map((product: any) => (
    <Product
      key={product.node.id}
      name={product.node.name}
      category={product.node.category}
      price={product.node.price}
      image={product.node.image.fluid.src}
    />
  ))
  return <div className="product_list">{mappedList}</div>
}

export default ProductList
