import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName: string, ProductDescription: string, ProductPrice: string) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    }
    this.http.post(this.uri, obj).subscribe(res => console.log("done"));
  }
  getProducts(): Observable<Product[]> {
    return this
      .http
      .get<Product[]>(`${this.uri}`);
  }
  editProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.uri}/${id}`);
  }
  updateProduct(ProductName: string, ProductDescription: string, ProductPrice: string, id: number): Observable<Product> {
    const obj = {
      id,
      ProductName,
      ProductDescription,
      ProductPrice
    }
    return this.http.put<Product>(`${this.uri}/${id}`, obj);
  }
  deleteProduct(id: number): Observable<Object> {
    return this.http.delete(`${this.uri}/${id}`);
  }
}
