import { Component } from '@angular/core';
import { LoginService } from '../../core/service/login/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj = {
    "emailId": "",
    "password": ""
  }
  constructor(private loginService:LoginService,private router:Router){}
  login()
  {
    debugger
    this.loginService.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {      
        alert("Login Successfully");
        localStorage.setItem('jiraUser',JSON.stringify(res.data))
         this.router.navigateByUrl('/employee');
       
      }
      else {
        alert(res.message);
      }
    })
  }
}
