import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../_models/order';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public total =0;

  public cartItemList : any =[]

  public productList = new BehaviorSubject<any>([]); 

  // public search = new BehaviorSubject<string>("");



  constructor(private http : HttpClient) { }

  getProducts(){

    return this.productList.asObservable();

  }
  addtoCart(product : any){

    this.cartItemList.push(product);

    this.productList.next(this.cartItemList);

    console.log(this.cartItemList);
    this.total =(this.cartItemList.price * this.cartItemList.quantity)

}
placeOrder(orderObject : any)
{
  return this.http.post('https://localhost:7005/api/Cart/CartAdd',orderObject);
}
show()
{
  return this.http.get<Order[]>('https://localhost:7005/api/Cart/CartGet');
}



}