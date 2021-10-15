import React from "react"
import Button from "../Button/Button"

const Product: React.FC<ProductProps> = props => {
  const { name, category, price, image } = props

  return (
    <div className="product">
      <div className="product__box_top">
        <div className="product__box_top__image">
          <img src={image} alt="forest" />
        </div>
        <div className="product__box_top__button">
          <Button
            classProp="snipcart-add-item"
            color="black"
            text="add to cart"
            cartProps={props}
          />
        </div>
      </div>
      <div className="product__box_bottom">
        <h5>{category}</h5>
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
    </div>
  )
}

export default Product
