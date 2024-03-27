import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiproductsService {

  constructor(private httpclient :HttpClient) { }
  getallproduct():Observable<Iproduct[]>{
   return this.httpclient.get<Iproduct[]>("http://localhost:3000/products")

  }
  getproductbyid(id:Number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  getproductbycatid(catid:Number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products?/catid=${catid}`)

  }
  updateproduct(proid: number, updatedProduct: Iproduct): Observable<Iproduct> {
    return this.httpclient.put<Iproduct>(`http://localhost:3000/products/${proid}`, updatedProduct);
  }
  
  deleteproduct(proid: number): Observable<void> {
    return this.httpclient.delete<void>(`http://localhost:3000/products/${proid}`);
  }
  
  Addproduct(newproduct :Iproduct):Observable<Iproduct>{
  return   this.httpclient.post<Iproduct>(`http://localhost:3000/products`,JSON.stringify(newproduct))

  }
}
