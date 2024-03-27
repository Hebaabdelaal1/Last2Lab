import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
// import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ShadowDirective } from '../../Directive/shadow.directive';
import { FullDate } from '../../Pipe/FullDate.pipe';
import { CreditcartPipe } from '../../Pipe/creditcart.pipe';
import { StaticProductsService } from '../../Services/static-products.service';
import { Route, Router } from '@angular/router';
import { ApiproductsService } from '../../Services/apiproducts.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule,ShadowDirective ,FullDate,CreditcartPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges, OnInit{
  Totalorderprice :number=0
 // products:Iproduct[]=[]
     FilterProducts:Iproduct[]=[];
Todaydate:Date=new Date();
num:string="29909011509345";
cart:string="00000000000000"
 @Input() recesivecatid : number=0
 @Output()  ontotalorderchange :EventEmitter<number>
 //@Output() onproductBought: EventEmitter<Iproduct> 
  constructor(private _StaticProductsService : StaticProductsService,private router : Router,private apiservice:ApiproductsService){
   
 this.FilterProducts=this._StaticProductsService.product
 // this.FilterProducts=this.apiservice
   this.ontotalorderchange=new EventEmitter()
  //this.onproductBought=new EventEmitter()

  }
  ngOnInit(): void {
    this.apiservice.getallproduct().subscribe({
      //success
    next:(res) =>{
      this.FilterProducts=res

    },
    //failed
    error:(err)=>{
console.log(err);
    }
   } )
  }

buy(product: Iproduct) {
  if (product.Quantity > 0) {
  
   // this.onproductBought.emit(product); 
     product.Quantity--;
    this.Totalorderprice += product.Price;
    // emit -->fire event
   this.ontotalorderchange.emit(this.Totalorderprice)
 } }
ngOnChanges() {
  this.FilterProducts=this._StaticProductsService.GetproductbycategoryId(this.recesivecatid)
// this.apiservice.getproductbycatid(this.recesivecatid).subscribe({
// next:(res)=>{
//this.FilterProducts=res
// },
// error:(err)=>{
//   console.log(err)
// }


// })

}
    navigatetodetails(id:number){
      //3way to navigate
      // 1
this.router.navigateByUrl(`/Details/${id}`) 
// 2
//this.router.navigate(['/Details',id])
   // 3 just in html 
    //[routerlink]="[`/Details",prd.id]
    }
 
  }
