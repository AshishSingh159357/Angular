import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDatUrl="../../assets/data/product.json"

  // injecting built-in service in user-defined service
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>(this.productDatUrl);
  }

}
