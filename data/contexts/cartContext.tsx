"use client";

import { createContext } from "react";

interface ICartContext {
   numero: number;
}

const CartContext = createContext<ICartContext>({} as any);

export const CartProvider = ({ children }: any) => {
   return (
      <CartContext.Provider
         value={{
            numero: 1000,
         }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartContext;
