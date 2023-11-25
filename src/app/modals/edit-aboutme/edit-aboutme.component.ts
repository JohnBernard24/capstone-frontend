import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent {
  constructor(public dialogRef: MatDialogRef<EditAboutmeComponent>) {}
  close() {
    this.dialogRef.close();
  }
}
