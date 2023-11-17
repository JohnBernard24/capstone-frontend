import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User = new User()

  constructor(
    private userService: UserService,
    private router: Router
  ){}


  ngOnInit(): void {}

  onRegister() {
    this.userService.register(this.user).subscribe({next: this.successfulRegister.bind(this),
      error: this.failedRegister.bind(this)
    
    })
  }

  successfulRegister(response: Record<string, any>) {
    console.log(response)
  }

  failedRegister(result: Record<string, any>) {
    console.log(result)
  }

}
