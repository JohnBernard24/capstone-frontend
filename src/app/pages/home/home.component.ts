import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { Post } from 'src/app/models/post';
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
  posts: Post[] = [];
  private userId: number = Number(this.sessionService.getUserId());
  
  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private friendService: FriendService
  ){
    this.getProfile(this.userId);
    this.getFriendRequests(this.userId);
    this.getNewsFeedPosts(this.userId);
  }
  ngOnInit(): void {}

  getNewsFeedPosts(userId: number){
    this.userService.getNewsFeedPosts(userId).subscribe((response: Post[]) => {
      this.posts = response;
    },
    (error) => {
      console.error("Error fetching newsfeed posts", error);
    });
  }

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

  deleteFromView(givenFriend: Friend): void{
    this.friends = this.friends.filter(friendEntry => friendEntry != givenFriend);
  }

  
}
