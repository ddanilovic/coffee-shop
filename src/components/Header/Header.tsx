import React from "react";

const Header: React.FC<HeaderProps> = (props) => {
  const { logo, rightIcon } = props;

  return (
    <div className="header">
      <div className="header_logo"></div>
      <div className="header_icon__right"></div>
    </div>
  );
};

export default Header;
