import React from "react";

const Hero: React.FC<HeroProps> = (props) => {
  const { title } = props;

  return (
    <div className="hero">
      <div className="hero_title">{title}</div>
      <div className="hero_button__right"></div>
    </div>
  );
};

export default Hero;
