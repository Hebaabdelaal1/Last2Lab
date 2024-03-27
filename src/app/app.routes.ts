import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { VisionComponent } from './Component/vision/vision.component';
import { ValuesComponent } from './Component/values/values.component';
import { DetailsComponent } from './Component/details/details.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { authanticationGuard } from './Gaurds/authantication.guard';
import { AddproductComponent } from './Component/addproduct/addproduct.component';

export const routes: Routes = [
    {path : '', redirectTo:'/Home',pathMatch:'full'},
    {path : 'Home', component:HomeComponent},
    {path : 'Addproduct', component:AddproductComponent},
    {path : 'Product', component:ProductComponent},
    {path : 'AboutUs', component:AboutUsComponent, children:[
        {path : '', redirectTo:'/AboutUs/vision',pathMatch:'full'},
        {path : 'vision', component:VisionComponent},
        {path : 'values', component:ValuesComponent}
        // :id -> means non static value
    ]},{path : 'Details/:id', component:DetailsComponent},
    {path : 'CotactUs', component:ContactUsComponent ,canActivate :[authanticationGuard]},
    {path : '**', component:NotFoundComponent},
];
