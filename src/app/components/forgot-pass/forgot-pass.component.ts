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
    this.userService.sendEmail(Number(this.userId), this.email).subscribe((response: Record<string, any>) => {
      this.toast.success({detail: "SUCCESS", summary: "Email verification sent!", duration: 5000})
    });
  }
}
