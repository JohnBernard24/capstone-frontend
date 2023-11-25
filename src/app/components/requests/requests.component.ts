import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{
  
  @Input() friend!: Friend;
  @Input() deleteFriendFromView!: Function;
  ngOnInit(): void {}

  constructor(
    private friendService: FriendService,
  ){}

  acceptRequest(requestId?: number, friend?: Friend){
    this.friendService.acceptFriendRequest(requestId).subscribe((response: Record<string, any>)=>{
      this.deleteFriendFromView(friend);
    });
  }

  removeRequest(requestId?: number, friend?: Friend){
    this.friendService.removeFriendRequest(requestId).subscribe((response: Record<string, any>) => {
      this.deleteFriendFromView(friend);
    });
  }
  
}
