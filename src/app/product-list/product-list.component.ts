import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../_models/product';
import { AccountService } from '../_services/account.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];
  

  constructor(private productService : ProductService,private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts()
  {
    this.productService.getProducts().subscribe({
      next:products =>this.products = products
    })
  }
  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('');
  }

}
