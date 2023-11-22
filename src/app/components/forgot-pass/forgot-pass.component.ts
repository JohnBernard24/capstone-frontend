import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  email: string = '';
  userId: string = '';

  constructor(
    private userService: UserService,
  ){}

  ngOnInit(): void {}


  onSubmit(): void{
  }
}
