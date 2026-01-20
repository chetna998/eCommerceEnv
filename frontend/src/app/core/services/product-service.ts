import { inject, Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 private baseurl = `${environment.apiBaseUrl}/products`;
 private http = inject(HttpClient)

 getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.baseurl)
 }

 getProductById(id:number):Observable<Product>{
  return this.http.get<Product>(`${this.baseurl}/${id}`)
 }

 createProduct(data:Omit<Product, 'id'>){
  return this.http.post(this.baseurl, data)
 }
 
}
