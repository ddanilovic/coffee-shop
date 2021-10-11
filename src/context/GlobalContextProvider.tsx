import React from "react";
import { ShopContextProvider } from "./ShopContext";

const GlobalContextProvider: React.FC<GlobalContextProps> = (props) => {
  return <ShopContextProvider>{props.children}</ShopContextProvider>;
};

export default GlobalContextProvider;
