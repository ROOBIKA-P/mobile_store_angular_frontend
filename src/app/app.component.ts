import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../component/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../component/header/header.component';
import { CartComponent } from '../component/cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductListComponent,HeaderComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mobile_app';
}
