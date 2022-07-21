import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //property / variebles

  //string interpolation
  aim ="Your Perfect Banking Partner"

  //property binding
  account="Enter your account number"

  acno=""
  pswd=""

  //database
  userDetails:any = {
      1000:{acno:1000,username:'neer',password:1000,balance:5000},
      1001:{acno:1001,username:'lysha',password:1001,balance:4000},
      1002:{acno:1002,username:'vyom',password:1002,balance:6000}

  }
  
  //constructor
  constructor() { }


  //ngOnInit - life cycle of angular
  ngOnInit(): void {
  }

  //user defined functions

  // //login
  // login()
  // {
    
  //   var acno = this.acno
  //   var pswd = this.pswd

  //   let userDetails = this.userDetails
    
  //   if(acno in userDetails)
  //   {
  //     if(pswd == userDetails[acno]['password'])
  //     {
  //       alert("login success")
  //     }
  //     else
  //     {
  //       alert("incorrect password")
  //     }
  //   }
  //   else
  //   {
  //     alert("user does not exist")
  //   }
  // }

  //login with 2 argument
  //login
  login(a:any,p:any)
  {
    
    var acno = a.value
    var pswd = p.value

    let userDetails = this.userDetails
    
    if(acno in userDetails)
    {
      if(pswd == userDetails[acno]['password'])
      {
        alert("login success")
      }
      else
      {
        alert("incorrect password")
      }
    }
    else
    {
      alert("user does not exist")
    }
  }

  //acnoChange()
  acnoChange(event:any)
  {
    this.acno=event.target.value
    console.log(event.target.value);

    
  }
  //pswdChange()
  pswdChange(event:any)
  {
    this.pswd=event.target.value
    console.log(event.target.value);
  }




}
