import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  email: string = '';
  userId: string = this.sessionService.getUserId();

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private toast: NgToastService
  ){}

  ngOnInit(): void {}

  onSubmit(): void{
    this.userService.sendEmail(this.email).subscribe({next: this.emailSent.bind(this),
      error: this.emailNotSent.bind(this)
    })
  }

  emailSent(){
    this.toast.success({detail: "SUCCESS", summary: "Email verification sent!", duration: 5000})
    //add the route to navigate or change the component that is being displayed in the forgot password
  }

  emailNotSent(response: Record<string, any>){
    this.toast.success({detail: "SUCCESS", summary: response["message"], duration: 5000})
  }
}
