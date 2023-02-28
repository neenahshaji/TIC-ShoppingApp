import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TopComponent } from './top/top.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { OrdershowComponent } from './ordershow/ordershow.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,

    
    TopComponent,
    RegisterComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    SideComponent,
    HomeComponent,
    OrdershowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
