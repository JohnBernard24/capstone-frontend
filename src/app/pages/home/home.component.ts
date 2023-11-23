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

  deleteFromView(givenFriend: Friend): void{
    this.friends = this.friends.filter(friendEntry => friendEntry != givenFriend);
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files && event.target.files[0];
  
    if (selectedFile) {
      // Ensure that miniProfileDTO, photo, and photoImage are defined before passing to uploadImage
      if (
        this.miniProfileDTO &&
        this.miniProfileDTO.photo &&
        this.miniProfileDTO.photo.photoImage
      ) {
        this.miniProfileDTO.photo.photoImage = selectedFile;
        // this.uploadImage(this.miniProfileDTO.photo.photoImage);
      } else {
        console.error('miniProfileDTO, photo, or photoImage is undefined');
        // Handle the case where miniProfileDTO, photo, or photoImage is undefined
      }
    } else {
      console.error('No file selected');
      // Handle the case where no file is selected
    }
  }
  
  
  


  // uploadImage(file: File): void {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file, file.name);
  
  //   this.http.post('your-api-endpoint', formData).subscribe(
  //     (response) => {
  //       // Handle the response from the backend
  //     },
  //     (error) => {
  //       // Handle errors
  //     }
  //   );
  // }

  // addPost()

}
