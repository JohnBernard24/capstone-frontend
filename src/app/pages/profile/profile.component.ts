import { Component, Input, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileDTO, User } from 'src/app/models/user';
import { PhotoService } from 'src/app/services/photo.service';
import { MatDialog } from '@angular/material/dialog';
import { EditAboutmeComponent } from 'src/app/modals/edit-aboutme/edit-aboutme.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

  selectedTab: string = 'timeline';

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  profileDTO:  ProfileDTO = new ProfileDTO();
  private userId: number = Number(this.sessionService.getUserId());


  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private sessionService: SessionService
  ){
    this.getMainProfile(this.userId)
  }

  openModal() {
    const dialogRef = this.dialog.open(EditAboutmeComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
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
