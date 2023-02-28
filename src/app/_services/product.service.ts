import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl ='https://localhost:7005/api/';
  

  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get<Product[]>(this.baseUrl + 'User');
  }
  getProduct(id : any)
  {
    return this.http.get<Product>('https://localhost:7005/api/User/' + id);
  }
  logout()
  {
    localStorage.removeItem('user');
  }

}
