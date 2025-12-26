import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(); // this is the code use to create context hook and we have to export for use

const ShopContextProvider = (props) => {
  const value = {};
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
