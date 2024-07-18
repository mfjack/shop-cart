import CartContext from "@/data/contexts/cartContext";
import Produto from "@/data/model/produto";
import Image from "next/image";
import { useContext } from "react";

interface ProductItemProps {
   produto: Produto;
}

const ProductItem = ({ produto }: ProductItemProps) => {
   const { addProductCartClick } = useContext(CartContext);

   const addCartClick = () => {
      addProductCartClick(produto);
   };

   return (
      <div className="border-2 p-2 rounded-lg bg-gray-100">
         <Image src={produto.imagem} alt={produto.nome} width={200} height={200} className="object-cover" />
         <div>
            <div className="py-2 flex justify-between items-center">
               <h2 className="font-semibold">{produto.nome}</h2>
               <p className="text-sm">R$ {produto.preco}</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 rounded-md shadow-sm text-white px-2 py-1" onClick={addCartClick}>
               Adicionar
            </button>
         </div>
      </div>
   );
};

export default ProductItem;
