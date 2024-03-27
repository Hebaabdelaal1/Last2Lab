import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../Services/static-products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ApiproductsService } from '../../Services/apiproducts.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  currentproid :number=0;
  product :Iproduct|null=null
  proid :Number[]=[];
  currentidindex:number=0
  // builtin service 
constructor(private _ActivatedRoute :ActivatedRoute, private _staticproductservice:StaticProductsService,private location:Location,private _router :Router,private _apiproductservice :ApiproductsService){
  this.proid = this._staticproductservice.mapproducttoid();
}
  ngOnInit(): void {
    //sevice activedruote has obj snapshot has key para (map)
    //get ->get anything from map
    //return from url as string so i cast
  // this.currentproid= Number(this._ActivatedRoute.snapshot.paramMap.get('id'))
  //  this.product=this._staticproductservice.GetproductbyId(this.currentproid)
  //arrow function will call every change will happen in parammap(id)
this._ActivatedRoute.paramMap.subscribe((prd)=>{this.currentproid=Number(prd.get('id'));
this.product=this._staticproductservice.GetproductbyId(this.currentproid) })
this._apiproductservice.getproductbyid(this.currentproid).subscribe({next:(res)=>{
  this.product=res},error:(err)=>{
    console.log(err)
  }
})

  }
  back(){
this.location.back();
  }
  previous(){
  
      this.currentidindex= this.proid.findIndex(prd=>prd==this.currentproid)
      if(this.currentidindex!=0)
         //catch current id and get pervious
   this._router.navigateByUrl(`/Details/${ this.proid[this.currentidindex-1]}`)
  }
    next(){
     this.currentidindex= this.proid.findIndex(prd=>prd==this.currentproid)
      if(this.currentidindex <this.proid.length-1)
      //catch current id and get next
      this._router.navigateByUrl(`/Details/${ this.proid[this.currentidindex+1]}`)
    }
  }

