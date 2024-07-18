"use client";

import ProductItem from "./product-item";
import produtos from "@/data/constants/produtos";

const HomePage = () => {
   return (
      <div className="container mx-auto h-screen">
         <div className="flex flex-wrap py-5 gap-5 justify-center">
            {produtos.map((produto) => (
               <ProductItem key={produto.id} produto={produto} />
            ))}
         </div>
      </div>
   );
};

export default HomePage;
