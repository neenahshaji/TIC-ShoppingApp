import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FrontComponent } from './front/front.component';
import { OrdershowComponent } from './ordershow/ordershow.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { SideComponent } from './side/side.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path: '',component:FrontComponent},
  {path: 'cart',component:CartComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'products',component:ProductListComponent},
  {path: 'products/:id',component:CartComponent},
  {path: 'ordershow',component:OrdershowComponent},
  {path: '**',component:FrontComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
