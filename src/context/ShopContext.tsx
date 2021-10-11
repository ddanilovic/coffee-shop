import React, { createContext } from "react";

const ShopContext = createContext({} as TShopContext);

const ShopContextProvider: React.FC<TShopContextProps> = (props) => {
  const providerValue = {};

  return (
    <ShopContext.Provider value={providerValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContextProvider, ShopContext };
