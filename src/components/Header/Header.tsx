import React from "react"

const Header: React.FC<HeaderProps> = props => {
  const { logo, rightIcon } = props

  return (
    <React.Fragment>
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__icon_right">
          <img className="snipcart-checkout" src={rightIcon} alt="cart" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
