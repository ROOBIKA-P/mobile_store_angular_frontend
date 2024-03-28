import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  addProductToCart(customerId: number, productId: number): Observable<any> {
    return this.http.post(`http://localhost:8091/AddProductToCart/${customerId}/${productId}`, {});
  }

 

  getAllProductsInCart(customerId: number): Observable<any> {
    const params = new HttpParams().set('customerId', customerId.toString());
    return this.http.get('http://localhost:8091/getAllProductsInCart', { params });
  }

  deleteProductFromCart(cartId: number): Observable<any> {
    return this.http.delete("http://localhost:8091/cartProduct/"+cartId);
  }

  increaseCount(cartId: number): Observable<any> {
    return this.http.patch(`http://localhost:8091/increaseCount/${cartId}`, {});
  }

  reduceCount(cartId: number): Observable<any> {
    return this.http.patch(`http://localhost:8091/reduceCount/${cartId}`, {});
  }
 

 }




