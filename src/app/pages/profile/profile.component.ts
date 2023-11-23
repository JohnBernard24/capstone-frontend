import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileDTO, User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileDTO:  ProfileDTO = new ProfileDTO();
  private userId: number = Number(this.sessionService.getUserId());


  constructor(
    private userService: UserService,
    private sessionService: SessionService
  ){
    this.getMainProfile(this.userId)
  }

  ngOnInit(): void{}

  getMainProfile(userId: number){
    this.userService.getProfile(userId).subscribe(
      (response: ProfileDTO) => {
        this.profileDTO = response;
      },
      (error) => {
        console.error("Error fetching profile:", error);
      }
    );
  }

  //===== WAITING FOR MODOL OF EDIT BIO"======
  // submitAboutMe(userId: number){
   // this.userService.editAboutMe(userId).subscribe({next: this.successfulRegister.bind(this),
   //   error: this.failedRegister.bind(this)
  //   this.userService.editAboutMe(userId).subscribe(
  //     (response: ProfileDTO) => {
  //       this.profileDTO = response;
  //     },
  //     (error) => {
  //       console.error("Error", error)
  //     }
  //   );
  // }

}
