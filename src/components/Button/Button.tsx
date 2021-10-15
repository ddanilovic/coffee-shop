import React from "react"

const Button: React.FC<ButtonProps> = props => {
  const { text, color, clickHandler, classProp, cartProps } = props

  return (
    <React.Fragment>
      <button
        type="button"
        className={`button button__${color} ${classProp}`}
        onClick={clickHandler}
        data-item-id={cartProps?.name}
        data-item-price={cartProps?.price}
        data-item-description={cartProps?.category}
        data-item-name={cartProps?.name}
        data-item-url="www.google.com"
      >
        {text}
      </button>
    </React.Fragment>
  )
}

export default Button
