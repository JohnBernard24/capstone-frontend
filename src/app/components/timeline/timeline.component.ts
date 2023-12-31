import { Component, OnInit } from '@angular/core';
import { EditAboutmeComponent } from 'src/app/modals/edit-aboutme/edit-aboutme.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';
import { ProfileDTO, User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{

  profileDTO: ProfileDTO = new ProfileDTO();
  private userId: number = Number(this.sessionService.getUserId());
  posts: Post[] = [];



  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private sessionService: SessionService
  ){}

  ngOnInit(): void {
    this.getMainProfile();
    this.loadAllPosts(this.userId);

  }

  openModal() {
    const dialogRef = this.dialog.open(EditAboutmeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getMainProfile(){
    this.userService.getMainProfile().subscribe(
      (response: ProfileDTO) => {
        this.profileDTO = response;
      },
      (error) => {
        console.error("Error fetching profile:", error);
      }
    );
  }

  

  loadAllPosts(userId: number){
    this.userService.getNewsFeedPosts(userId).subscribe((response: Post[]) => {
      this.posts = response;
    },
    (error) => {
      console.error("Error fetching newsfeed posts", error);
    });
  }
}
