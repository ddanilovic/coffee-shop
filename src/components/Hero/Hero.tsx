import React from "react";
import Button from "../Button/Button";

import heroPhoto from "../../assets/img/dog.jpg";
import forestPhoto from "../../assets/img/forest.jpg";

const Hero: React.FC<HeroProps> = (props) => {
  const { title, about, category, description, dimmentions, size } = props;

  return (
    <div className="hero">
      <div className="hero__top_box">
        <div className="hero__top_box__title">{title}</div>
        <div className="hero__top_box__button_right">
          <Button color="black" text="add to cart" />
        </div>
      </div>
      <div className="hero__photo_box">
        <img src={heroPhoto} alt="hero" />
      </div>
      <div className="hero__bottom_box">
        <div className="hero__bottom_box__left">
          <h3>{about}</h3>
          <h3>{category}</h3>
          <p>{description}</p>
        </div>
        <div className="hero__bottom_box__right">
          <h3>People Also Buy</h3>
          <div className="hero__bottom_box__right__images">
            <div className="hero__bottom_box__right__images__image">
              <img src={forestPhoto} alt="1" />
            </div>
            <div className="hero__bottom_box__right__images__image">
              <img src={forestPhoto} alt="1" />
            </div>
            <div className="hero__bottom_box__right__images__image">
              <img src={forestPhoto} alt="1" />
            </div>
          </div>
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
  );
};

export default Hero;
