import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { MiniProfileDTO, User } from 'src/app/models/user';
import { FriendService } from 'src/app/services/friend.service';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  miniProfileDTO: MiniProfileDTO = new MiniProfileDTO();
  friends: Friend[] = [];
  private userId: number = Number(this.sessionService.getUserId());
  
  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private friendService: FriendService
  ){
    this.getProfile(this.userId);
    this.getFriendRequests(this.userId);
  }
  ngOnInit(): void {}

  getProfile(userId: number) {
    this.userService.getProfile(userId).subscribe(
      (response: MiniProfileDTO) => {
        this.miniProfileDTO = response;
      },
      (error) => {
        console.error("Error fetching profile:", error);
      }
    );
  }

  getFriendRequests(userId: number){
    this.friendService.getFriendRequests(userId).subscribe((response: Friend[]) =>{
      this.friends = response;
    });
  }
  
}
