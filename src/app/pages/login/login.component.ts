import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';

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
    private router: Router
  ){}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.email,this.password).subscribe({next: this.successfulLogin.bind(this),
      error: this.failedLogin.bind(this)
    
    })
  }

  successfulLogin(response: Record<string, any>) {
    
    this.sessionService.setEmail(response['email'])
    this.sessionService.setToken(response['token'])
    this.router.navigate(['']).then(() => {
      window.location.href = '/home'
    })
  }

  failedLogin(result: Record<string, any>) {
    let data: Record<string, any> = result['error']
    console.log(data);
  }

}

