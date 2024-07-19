import CartItem from "@/data/model/cart-item";
import Produto from "@/data/model/produto";
import { IconMinus, IconPlus, IconTrash, IconX } from "@tabler/icons-react";
import Image from "next/image";

interface ProductCartProps {
   item: CartItem;
   add: (produto: Produto) => void;
   removeOneItem: (produto: Produto) => void;
   removeItem: (produto: Produto) => void;
}

const ProductCart = ({ item, add, removeOneItem, removeItem }: ProductCartProps) => {
   return (
      <div className="p-2 bg-zinc-400 rounded-md w-full flex items-center">
         <Image className="object-cover" src={item.produto.imagem} alt={item.produto.nome} width={100} height={100} />

         <div className="px-5 flex justify-between items-center w-full">
            <div>
               <p>{item.produto.nome}</p>
               <div className="leading-5 flex flex-col gap-3">
                  <p>R$ {item.produto.preco}</p>
                  <div className="flex gap-1 items-center">
                     <IconX size={15} />
                     <span>{item.quantidade}</span>
                     <span>=</span>
                     <span className="font-bold text-sm">R$ {Number((item.produto.preco * item.quantidade).toFixed(2))}</span>
                  </div>
               </div>
            </div>
            <div className="flex justify-center items-center gap-2">
               <button onClick={() => removeOneItem(item.produto)}>
                  <IconMinus size={15} />
               </button>
               <span>{item.quantidade}</span>
               <button onClick={() => add(item.produto)}>
                  <IconPlus size={15} />
               </button>
            </div>
            <button onClick={() => removeItem(item.produto)}>
               <IconTrash size={20} />
            </button>
         </div>
      </div>
   );
};

export default ProductCart;
