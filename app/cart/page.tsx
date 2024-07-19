"use client";

import CartContext from "@/data/contexts/cartContext";
import Link from "next/link";
import { useContext } from "react";
import ProductCart from "./product-cart";

const CartPage = () => {
   const { itens, addProductCartClick, removeOneItem, removeItem } = useContext(CartContext);

   return (
      <div className="container mx-auto p-5 h-screen">
         <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Carrinho de Compra</h2>
            Total: R$ {itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0).toFixed(2)}
         </div>

         {itens.length > 0 ? (
            <div className="flex gap-5 mt-10 flex-col justify-center items-center">
               {itens.map((item) => (
                  <ProductCart key={item.produto.id} item={item} add={addProductCartClick} removeItem={removeItem} removeOneItem={removeOneItem} />
               ))}
            </div>
         ) : (
            <div className="flex flex-col gap-4">
               <p className="text-lg mt-5">Seu carrinho esta vazio :(</p>
               <Link className="bg-blue-400 p-3 w-32 rounded-lg shadow" href="/">
                  Ver produtos
               </Link>
            </div>
         )}
      </div>
   );
};

export default CartPage;
