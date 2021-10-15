import React, { createContext, useState } from "react"

const ShopContext = createContext({} as TShopContext)

const ShopContextProvider: React.FC<TShopContextProps> = props => {
  const [products, setProducts] = useState([])

  const providerValue = {
    products,
    setProducts,
  }

  return (
    <ShopContext.Provider value={providerValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export { ShopContextProvider, ShopContext }
