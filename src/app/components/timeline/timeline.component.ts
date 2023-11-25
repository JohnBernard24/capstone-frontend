import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAboutmeComponent } from '@components/edit-aboutme/edit-aboutme.component';
import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';
import { ProfileDTO, User } from 'src/app/models/user';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{

  profileDTO: ProfileDTO = new ProfileDTO();
  private userId: number = Number(this.sessionService.getUserId());


  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private sessionService: SessionService
  ){}

  ngOnInit(): void {
    this.getMainProfile(this.userId)
    
  }

  openModal() {
    const dialogRef = this.dialog.open(EditAboutmeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getMainProfile(userId: number){
    this.userService.getMainProfile(userId).subscribe(
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
