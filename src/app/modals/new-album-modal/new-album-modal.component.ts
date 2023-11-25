import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PhotoService } from 'src/app/services/photo.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-new-album-modal',
  templateUrl: './new-album-modal.component.html',
  styleUrls: ['./new-album-modal.component.css']
})
export class NewAlbumModalComponent {

  file: File | null = null;
  albumId: number = 1;
  constructor
    (
      public dialogRef: MatDialogRef<NewAlbumModalComponent>,
      private sessionService: SessionService,
      private photoService: PhotoService
    ) {}

  close() {
    this.dialogRef.close();
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.uploadPhoto();
  }

  //test
  uploadPhoto() {
    if (this.file) {
      this.photoService.uploadPhoto(this.albumId, this.file).subscribe(
        response => {
          console.log('Photo uploaded successfully. Photo ID:', response.photoId);
        },
        error => {
          console.error('Error uploading photo:', error);
          // Handle the error as needed
        }
      );
    }
  }
}
