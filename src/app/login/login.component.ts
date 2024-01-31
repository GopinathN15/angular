import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
 user:any
 pass:any

 loginforms=new FormGroup({
  admin:new FormGroup('',Validators.required),
  password:new FormGroup('',Validators.required)
 })

constructor(private route : Router){}

  ngOnInit(): void {
   
  }

  get admin(){
    return this.loginforms.get('admin')
  }
  get password(){
    return this.loginforms.get('password')
  }
 login(){
  if(this.user=='gopinath' && this.pass=='12345'){
    alert("login success");
    // console.log(this.user)
    // console.log(this.pass)
 
    this.route.navigate(["dashboard"]);
  }else{
    alert("login Failed Try Again");
    // console.log(this.user)
    // console.log(this.pass)

  }
 }
}


