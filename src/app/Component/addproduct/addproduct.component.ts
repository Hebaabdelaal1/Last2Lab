import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ApiproductsService } from '../../Services/apiproducts.service';
import { Route, Router } from '@angular/router';
import { Icategory } from '../../Models/icategory';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports:[FormsModule , CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  Categoris:Icategory[]=[]
 
  //obj as i pro until enter value
  newproduct :Iproduct={} as Iproduct;
  constructor(private _apiproductservice :ApiproductsService, private router:Router){
this.Categoris=[{Id:1 , Name:'Labtob'},
{Id:2 ,Name:'Mobile'}]
  }
  Addnewpro(){
this._apiproductservice.Addproduct(this.newproduct).subscribe(
  {
    next:(res)=>{
      this.router.navigateByUrl('../components/Product')

    },
    error:(err)=>{
      console.log(err)
     } 
   })
  }
  }
 

