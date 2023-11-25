import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-album-modal',
  templateUrl: './new-album-modal.component.html',
  styleUrls: ['./new-album-modal.component.css']
})
export class NewAlbumModalComponent {
  constructor(public dialogRef: MatDialogRef<NewAlbumModalComponent>) {}
  close() {
    this.dialogRef.close();
  }
}
