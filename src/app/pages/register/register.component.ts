import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserRegisterDTO } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: UserRegisterDTO = new UserRegisterDTO()
  confirmPassword: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: NgToastService
  ){}


  ngOnInit(): void {}

  onSubmit() {
    this.userService.register(this.user).subscribe({
        next: this.successfulRegister.bind(this), 
        error: this.failedRegister.bind(this)
    });
}

  onRegister() {
    this.userService.register(this.user).subscribe({next: this.successfulRegister.bind(this),
      error: this.failedRegister.bind(this)
    
    })
  }

  successfulRegister(response: Record<string, any>) {
    this.toast.success({detail: "SUCCESS", summary: response["result"], duration: 5000});
    this.router.navigate(['/login']);
  }

  failedRegister(result: Record<string, any>) {
    this.toast.error({detail: "ERROR", summary: result["error"], duration: 5000});
  }
  

}
