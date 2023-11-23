import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User, EditPasswordDTO } from 'src/app/models/user';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit{
  userId: number = Number(this.sessionService.getUserId());
  editPasswordDTO: EditPasswordDTO = new EditPasswordDTO();

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private toast: NgToastService
  ){}

  ngOnInit(): void {}

  onSubmit(): void {
    this.userService.editPassword(this.editPasswordDTO)
  }
}
