import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private router: Router,
    private toast: NgToastService
  ){}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.email,this.password).subscribe({next: this.successfulLogin.bind(this),
      error: this.failedLogin.bind(this)
    
    })
  }

  successfulLogin(response: Record<string, any>) {
    
    this.toast.success({detail: "SUCCESS", summary: "Login Successful", duration: 5000});
    this.sessionService.setEmail(response['email']);
    this.sessionService.setToken(response['token']);
    this.sessionService.setUserId(response['userId']);

    this.router.navigate(['/home'])
  }

  failedLogin(result: Record<string, any>) {
    this.toast.error({detail: "ERROR", summary: result["error"], duration: 5000});
    console.log(result['error']);
  }

}

