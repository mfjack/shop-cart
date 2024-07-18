import Produto from "./produto";

export default interface CartItem {
   produto: Produto;
   quantidade: number;
}
