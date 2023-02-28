import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {};
  registerMode = false;
  registerForm : FormGroup = new FormGroup({});

  constructor(private accountService: AccountService,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm()
  {
    this.registerForm = new FormGroup({
      username : new FormControl('',Validators.required),
      city : new FormControl('',Validators.required),
      district : new FormControl('',Validators.required),
      state : new FormControl('',Validators.required),
      country : new FormControl('',Validators.required),
      phonenumber : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      deliveryaddress : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.required,
      Validators.minLength(4),Validators.maxLength(8)]),
     
    })
    // this.registerForm.controls['password'].valueChanges.subscribe({
    //   next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    // })
  }

  matchValues(matchTo:string):ValidatorFn
  {
    return (control:AbstractControl) =>{
      return control.value === control.parent?.get(matchTo)?.value 
      ? null :{notMatching:true}
    }
  }


  register()
  {
    this.accountService.register(this.registerForm.value).subscribe((response) =>{
      this.router.navigateByUrl('/products');
      
    })
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
