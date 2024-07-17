import { IconBrandAmazon, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

const Header = () => {
   return (
      <header className="flex justify-between p-5 bg-zinc-500 h-20">
         <Link href="/">
            <IconBrandAmazon size={40} stroke={2} className="text-white" />
         </Link>
         <Link href="/cart">
            <IconShoppingCart size={35} stroke={2} className="text-white" />
         </Link>
      </header>
   );
};

export default Header;
