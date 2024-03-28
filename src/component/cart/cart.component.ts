import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app/service/product.service';
import { CartService } from '../../app/service/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { Product } from '../../model/Product';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule, CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  customerId: number = 1; // Sample user ID
  productId: number = 1; // Sample product ID
  
   cartList: any[] = [];
   cart: any;
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllProductsInCart(this.customerId);
  }

 addProductToCart(customerId: number, productId: number): void {
  this.cartService.addProductToCart(customerId, productId).subscribe(
    (newProduct) => {
      console.log('Product added to cart successfully', newProduct);
      this.cartList.push(newProduct); // Add the new product to the cartList
    },
    (error) => {
      console.error('Error adding product to cart:', error);
    }
  );
}

  getAllProductsInCart(customerId: number): void {
    this.cartService.getAllProductsInCart(customerId).subscribe(
      (data) => {
        this.cartList = data;
        console.log('Cart items retrieved successfully', data);
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );}

  
  increaseCount(cartId: number): void {
    this.cartService.increaseCount(cartId).subscribe(
      (data) => {
        console.log('Count increased successfully', data);
      },
      (error) => {
        console.error('Error increasing count:', error);
      }
    );
  }

  reduceCount(cartId: number): void {
    this.cartService.reduceCount(cartId).subscribe(
      (data) => {
        console.log('Count reduced successfully', data);
      },
      (error) => {
        console.error('Error reducing count:', error);
      }
    );
  }

 deleteProductFromCart(cartId: number): void {
    this.cartService.deleteProductFromCart(cartId).subscribe(
      (data) => {
        console.log('Product deleted successfully', data);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

 

}






// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../../app/service/product.service';
// import { Cart } from '../../model/Cart';
// import { CartService } from '../../app/service/cart.service';
// import { HttpClientModule } from '@angular/common/http';
// import { Product } from '../../model/Product';
// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule,HttpClientModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent  {
//            cart: Cart[] = [];

//  constructor(private cartService: CartService) {}

// loadAllProductsCart(): void {
//    this.cartService.getAllCart()
//       .subscribe(
//         (data: Cart[]) => {
//           console.log(data);
//           this.cart = data;
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }
// }



