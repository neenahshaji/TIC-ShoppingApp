import { Component, OnInit } from '@angular/core';
import { Order } from '../_models/order';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-ordershow',
  templateUrl: './ordershow.component.html',
  styleUrls: ['./ordershow.component.css']
})
export class OrdershowComponent implements OnInit {
  order : Order[]=[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.show();
  }

  show()
  {
    this.cartService.show().subscribe({
      next:order =>this.order = order
    })
    console.log("order",this.order)
  }

}
