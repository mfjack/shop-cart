"use client";

import { createContext, useState } from "react";
import Produto from "../model/produto";
import CartItem from "../model/cart-item";

interface ICartContext {
   itens: CartItem[];
   amount: number;
   addProductCartClick: (produto: Produto) => void;
   removeOneItem: (produto: Produto) => void;
   removeItem: (produto: Produto) => void;
}

export const CartContext = createContext<ICartContext>({} as any);

export const CartProvider = ({ children }: any) => {
   const [itens, setItens] = useState<CartItem[]>([]);

   const addProductCartClick = (produto: Produto) => {
      const itemIndex = itens.findIndex((i) => i.produto.id === produto.id);

      if (itemIndex === -1) {
         setItens([...itens, { produto, quantidade: 1 }]);
      } else {
         const newItens = [...itens];
         newItens[itemIndex].quantidade += 1;
         setItens(newItens);
      }
   };

   const removeOneItem = (produto: Produto) => {
      const itemIndex = itens.findIndex((i) => i.produto.id === produto.id);

      if (itemIndex !== -1) {
         const newItens = [...itens];
         if (newItens[itemIndex].quantidade > 1) {
            newItens[itemIndex].quantidade -= 1;
            setItens(newItens);
         } else {
            removeItem(produto);
         }
      }
   };

   const removeItem = (produto: Produto) => {
      setItens(itens.filter((i) => i.produto.id !== produto.id));
   };

   const amount = itens.reduce((acc, item) => acc + item.quantidade, 0);

   return (
      <CartContext.Provider
         value={{
            itens,
            addProductCartClick,
            removeOneItem,
            removeItem,
            amount,
         }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartContext;
