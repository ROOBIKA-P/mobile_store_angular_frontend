import { Routes } from '@angular/router';
import { CartComponent } from '../component/cart/cart.component';
import { ProductListComponent } from '../component/product-list/product-list.component';

export const routes: Routes = [
    {path:'cart',component:CartComponent},
    {path:'product', component:ProductListComponent}
];
