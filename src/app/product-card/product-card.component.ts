import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product :Product | undefined;
  

  constructor(private cartService :CartService) { }

  ngOnInit(): void {
  }

  addToCart(product:any)
  {
    this.cartService.addtoCart(product);
    product.quantity =1;
  }

}
