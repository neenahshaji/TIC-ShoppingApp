import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  model:any ={};
  loggedIn = false;

  
  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  // login()
  // {
  //   this.accountService.login(this.model).subscribe({
  //     next:response => {
  //       console.log(response);
  //       this.loggedIn = true;
  //     },
  //     error:error => console.log(error)
  //   })
  // }

  login()
  {
    this.accountService.login(this.model).subscribe((response) =>{
      this.router.navigateByUrl('/products');
      this.loggedIn = true;
    
    })
    
    
  }

}
