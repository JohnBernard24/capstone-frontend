import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Friend } from 'src/app/models/friend';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-requests-modal',
  templateUrl: './requests-modal.component.html',
  styleUrls: ['./requests-modal.component.css']
})
export class RequestsModalComponent {
  @Input() friend!: Friend;
  @Input() deleteFromView!: Function;

  constructor(
    public dialogRef: MatDialogRef<RequestsModalComponent>,
    private friendService: FriendService
    ) {}


  close() {
    this.dialogRef.close();
  }

  acceptRequest(requestId?: number, friend?: Friend){
    this.friendService.acceptFriendRequest(requestId).subscribe((response: Record<string, any>)=>{
      this.deleteFromView(friend);
    });
  }

  removeRequest(requestId?: number, friend?: Friend){
    this.friendService.removeFriendRequest(requestId).subscribe((response: Record<string, any>) => {
      this.deleteFromView(friend);
    });
  }
}
