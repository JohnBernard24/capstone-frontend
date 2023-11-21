import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserRegisterDTO } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: UserRegisterDTO = new UserRegisterDTO()

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
    this.router.navigate(['/login'])
  }

  failedRegister(result: Record<string, any>) {
    console.log(result)
  }

}
