import { Product } from "./Product";

export class Cart {
  cartId: number;
  products: Product[];

  constructor(cartId: number, products: Product[]) {
    this.cartId = cartId;
    this.products = products;
  } 
}





