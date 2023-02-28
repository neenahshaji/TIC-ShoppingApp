import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  cartItemList } from '../_models/cartitem';
import { Product } from '../_models/product';
import { CartService } from '../_services/cart.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products : Product[] = [];
  cartItems :cartItemList[] | undefined;
  

  constructor(private cartService : CartService,private router:Router) { }

  ngOnInit(): void {

    this.cartService.getProducts()

    .subscribe(products=>{

      this.products = products;

    })

  }
  // loadProduct()
  // {
  //   this.cartService.getProducts().subscribe(res=> {this.products =res;})
  // }
  //     this.product?.id).subscribe({
  //     next:product =>this.product = product
      
  //   }),console.log("hh",this.product?.id);
  // }
  removeFromCart(product : Product)
  {
    const index = this.products.indexOf(product, 0);
      if (index > -1) {
          this.products.splice(index, 1);
      }
  }
 
  emptyCart(){
    this.products=[];
    
  }
  getTotalValue():number {
    //let total: number = 0;
    let sum = this.products.reduce(
      (a, b) => {a = a + b.price * b.quantity; return a;}, 0);
    return sum;
  }

  placeOrder(items)
  {

    items.forEach(element => {
      element.amount = element.price * element.quantity;
      
    });


    let orderObject = {
      user_id: 2,
      total_amount: this.getTotalValue(),
      
      // items: items,
      // quantity: items.quantity
    }

     console.log("orderObject",orderObject);
     
     this.cartService.placeOrder(orderObject).subscribe((response) =>{
      this.router.navigateByUrl('/ordershow');
      
    })
  }

  
}
