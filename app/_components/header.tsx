import { IconBrandAmazon, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

const Header = () => {
   return (
      <header className="flex justify-between p-5 bg-zinc-500 h-20">
         <Link href="/">
            <IconBrandAmazon size={40} stroke={2} className="text-white" />
         </Link>
         <Link href="/cart" className="relative">
            <IconShoppingCart size={35} stroke={2} className="text-white" />
            <div className="absolute w-6 h-6 bg-red-500 rounded-full text-center text-white top-0 right-0 flex items-center text-xs justify-center">10</div>
         </Link>
      </header>
   );
};

export default Header;
