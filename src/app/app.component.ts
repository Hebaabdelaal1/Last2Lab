import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ProductComponent } from './Component/product/product.component';
import {  OrderComponent } from './Component/order/order.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
  FooterComponent,ProductComponent, OrderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec1';
}
