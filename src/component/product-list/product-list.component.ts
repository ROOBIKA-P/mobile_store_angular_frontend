import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { ProductService } from '../../app/service/product.service';
import { Product } from '../../model/Product';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterBrand: string = '';
  sortByNameOrder: string = '';
  sortBy: string = '';
  selectedProduct: any;
  cartProducts: any[] = [];
  totalPrice: number = 0;
  constructor(private productService: ProductService) {
      this.loadAllProducts();
  }

  loadAllProducts() {
      this.productService.getAllProducts()
          .subscribe((data) => {
              this.products = data;
              this.filteredProducts = data; // Initialize filteredProducts with all products
          });
  }
  showProduct(product: any) {
    this.selectedProduct = product;
    }


  
  applyFilter() {
      this.filteredProducts = this.products.filter(product =>
          product.brandName && product.brandName.toLowerCase().includes(this.filterBrand.toLowerCase())
      );
  }


  sortByPrice(order: string) {
      this.sortBy = order;
      this.filteredProducts = [...this.filteredProducts].sort((a, b) => {
          if (order === 'asc') {
              return (a.price || 0) - (b.price || 0);
          } else if (order === 'desc') {
              return (b.price || 0) - (a.price || 0);
          }
          return 0;
      });
  }
  sortByName(order: string) {
    this.sortByNameOrder = order;
    this.filteredProducts.sort((a, b) => {
        const nameA = (a.brandName||' ').toLowerCase();
        const nameB = (b.brandName||' ').toLowerCase();
        if (order === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });
}

addToProduct(product:any){
this.cartProducts.push(product);
}

calculateTotalPrice(): void {
  this.totalPrice = this.cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
}

addToCart(product: Product): void {
  const productCopy = { ...product }; 
  this.cartProducts.push(productCopy);
  this.calculateTotalPrice(); // Update total price when adding a product to the cart
}

increaseQuantity(product: Product): void {
  product.quantity++;
  this.calculateTotalPrice(); // Update total price when increasing quantity
}

decreaseQuantity(product: Product): void {
  if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotalPrice(); // Update total price when decreasing quantity
  }
}
removeFromCart(product: Product): void {
  this.cartProducts = this.cartProducts.filter(item => item !== product);
  this.calculateTotalPrice(); // Update total price when removing a product from the cart
}
}