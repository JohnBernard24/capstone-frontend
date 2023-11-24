import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAboutmeComponent } from '@components/edit-aboutme/edit-aboutme.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {
    
  }

  openModal() {
    const dialogRef = this.dialog.open(EditAboutmeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
