import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { Iproduct } from '../../Models/iproduct';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule,ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
    orderedProducts: Iproduct[] =[];
  Selectcategoryid : number =0
  recieveTotalorderprice:number =0
  categories : Icategory[];
// @ViewChild('username') inputele! :ElementRef
 @ViewChild(ProductComponent) productcomp !: ProductComponent
  constructor(){
    this.categories=[{Id:1 , Name:'Labtob'},
    {Id:2 ,Name:'Mobile'}]
  }
  changetotalprice(price:number){
this.recieveTotalorderprice=price
  }
  addOrderedProduct(product: Iproduct) {
    this.orderedProducts.push(product);
  }
  ngAfterViewInit(): void{
    //this.inputele.nativeElement.value="heba"


  }
}
