import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl ='https://localhost:7005/api/';

  constructor(private http:HttpClient) {}

login(model: any)
{
  return this.http.post(this.baseUrl + 'Account/login', model).pipe(
    map((response: any) =>{
      const user = response;
      if(user){
        localStorage.setItem('user',JSON.stringify(user))
      }
    })
  )
  
}
logout()
{
  localStorage.removeItem('user');
}
register(model : any)
{
  return this.http.post(this.baseUrl + 'Account/register', model).pipe(
    map(user =>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
      }
      return user;
    })
  )
}

   
}
