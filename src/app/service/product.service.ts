import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../model/Cart';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  public getAllProducts(): Observable<any> {
    return this.http.get(
      "http://localhost:8091/product");
    }

    addToCart(payload: any): Observable<any> {
      return this.http.post("http://localhost:8091/AddProductToCart", payload);
    }
      getAllCart(): Observable<Cart[]> {
        return this.http.get<Cart[]>("http://localhost:8091/getAllProductsInCart");
      }
}
