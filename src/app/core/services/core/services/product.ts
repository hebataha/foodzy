import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {


  }
  private URL = "https://dummyjson.com"
  getAllProducts() {
    return this._HttpClient.get(`${this.URL}/products`)
  }

}
