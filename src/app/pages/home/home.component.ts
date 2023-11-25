import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { Post } from 'src/app/models/post';
import { MiniProfileDTO, User } from 'src/app/models/user';
import { FriendService } from 'src/app/services/friend.service';
import { PhotoService } from 'src/app/services/photo.service';
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

  private userId: number = 0;
  post: Post = new Post();
  file: File | null = null;
  albumId: number = 1;
  
  ngOnInit(): void {}
  
  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private friendService: FriendService,
    private photoService: PhotoService
  ){
    this.userId = Number(this.sessionService.getUserId());
    this.getProfile(this.userId);
    this.getFriendRequests(this.userId);
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

  deleteFriendFromView(givenFriend: Friend): void{
    this.friends = this.friends.filter(friendEntry => friendEntry != givenFriend);
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.uploadPhoto();
  }

  uploadPhoto() {
    if (this.file) {
      this.photoService.uploadPhoto(this.albumId, this.file).subscribe(
        response => {
          console.log('Photo uploaded successfully. Photo ID:', response.photoId);
          // Add any further handling or redirection here
        },
        error => {
          console.error('Error uploading photo:', error);
          // Handle the error as needed
        }
      );
    }
  }
  
  
  


 

}
