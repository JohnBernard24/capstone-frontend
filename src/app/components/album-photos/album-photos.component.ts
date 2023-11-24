import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '@components/image-modal/image-modal.component';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})

export class AlbumPhotosComponent {
  constructor(private dialog: MatDialog) {
    // ...
  }

  openModal(imageUrl: string): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: {
        imageUrl: imageUrl,
      },
    });

    // Listen for mouseleave event on the image and close the modal
    dialogRef.afterOpened().subscribe(() => {
      const imageElement = document.querySelector('#testImg'); // replace with the actual id of your image
      if (imageElement) {
        imageElement.addEventListener('mouseleave', () => {
          dialogRef.close();
        });
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the modal is closed
    });
  }
}
