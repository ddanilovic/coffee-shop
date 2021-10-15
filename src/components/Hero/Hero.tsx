import React from "react"
import Button from "../Button/Button"

import heroPhoto from "../../assets/img/dog.jpg"
import forestPhoto from "../../assets/img/forest.jpg"

const Hero: React.FC<HeroProps> = props => {
  const { title, images, category, description, dimmentions, size, price } =
    props

  const cartPropsTest = { name: title, price }

  const mappedList = images.map((file: any) => (
    <div
      key={file.fixed.src}
      className="hero__bottom_box__right__images__image"
    >
      <img src={file.fixed.src} alt="1" />
    </div>
  ))

  return (
    <React.Fragment>
      <div className="line_top"></div>
      <div className="hero">
        <div className="hero__top_box">
          <div className="hero__top_box__title">
            <h2>{title}</h2>
          </div>
          <div className="hero__top_box__button_right">
            <Button
              classProp="snipcart-add-item"
              color="black"
              text="add to cart"
              cartProps={cartPropsTest}
            />
          </div>
        </div>
        <div className="hero__photo_box">
          <img src={heroPhoto} alt="hero" />
        </div>
        <div className="hero__bottom_box">
          <div className="hero__bottom_box__button">
            <Button
              classProp="snipcart-add-item"
              color="black"
              text="add to cart"
              cartProps={cartPropsTest}
            />
          </div>
          <div className="hero__bottom_box__left">
            <h3>About the {title}</h3>
            <h3>{category}</h3>
            <p>{description}</p>
          </div>
          <div className="hero__bottom_box__right">
            <h3>People Also Buy</h3>
            <div className="hero__bottom_box__right__images">{mappedList}</div>
            <div className="hero__bottom_box__right__details">
              <h3>Details</h3>
              <h4>
                Size: {dimmentions.width}x{dimmentions.height} pixel
              </h4>
              <h4>Size: {size}mb</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="line_bottom"></div>
    </React.Fragment>
  )
}

export default Hero
