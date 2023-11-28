import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Friend } from 'src/app/models/friend';
import { FriendService } from 'src/app/services/friend.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-requests-modal',
  templateUrl: './requests-modal.component.html',
  styleUrls: ['./requests-modal.component.css']
})
export class RequestsModalComponent implements OnInit {
  @Input() friend!: Friend;
  friends: Friend[] = [];

  private userId: number = 0;

  ngOnInit(): void {}

  constructor(
    public dialogRef: MatDialogRef<RequestsModalComponent>,
    private sessionService: SessionService,
    private friendService: FriendService
    ) {
      this.userId = Number(this.sessionService.getUserId());
      this.getFriendRequests(this.userId);
    }
  close() {
    this.dialogRef.close();
  }

  deleteFriendFromView(givenFriend: Friend): void{
    this.friends = this.friends.filter(friendEntry => friendEntry != givenFriend);
  }

  getFriendRequests(userId: number){
    this.friendService.getFriendRequests().subscribe((response: Friend[]) =>{
      this.friends = response;
    });
  }
}
