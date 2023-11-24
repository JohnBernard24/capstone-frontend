import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Album, AlbumDTO, AlbumWithFirstPhoto } from 'src/app/models/album';
import { SessionService } from 'src/app/services/session.service';
import { PhotoService } from 'src/app/services/photo.service';
import { MatDialog } from '@angular/material/dialog';
import { NewAlbumModalComponent } from '@components/new-album-modal/new-album-modal.component';

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.css']
})
export class AllAlbumComponent implements OnInit {

  @Input() photoId: number = 1;
  //test
  file: File | null = null;
  albumId: number = 1;

  photo: any

  private userId: number = Number(this.sessionService.getUserId());
  albums: Album[] =[]
  thumbnail: AlbumWithFirstPhoto[] = [];
  //selectedAlbum: Album;
  newAlbum: AlbumDTO = {
    // Initialize with default values if needed
    // For example: AlbumName: '', UserId: 0}
  };
  constructor(
    public dialog: MatDialog,
    private albumService: AlbumService,
    private sessionService: SessionService,
    //test
    private photoService: PhotoService
  ){}



  ngOnInit(): void {
    this.loadAlbums();  
    this.loadThumbnail(); 
  }


  openModal() {
    const dialogRef = this.dialog.open(NewAlbumModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  //test
  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  //test
  uploadPhoto() {
    if (this.file) {
      this.photoService.uploadPhoto(this.albumId, this.file).subscribe(
        response => {
          console.log('Photo uploaded successfully. Photo ID:', response.photoId);
          // Add any further handling or redirection here
        },
        error => {
          console.error('Error uploading photo:', error);
          // Handle the error as needed
        }
      );
    }
  }

  loadAlbums() {
    this.albumService.getAllAlbums(this.userId).subscribe((response: Album[]) => {
      this.albums = response
    });
  }

  loadThumbnail() {
    this.photoService.getPhoto(1).subscribe((response: AlbumWithFirstPhoto[]) => {
      this.thumbnail = response
    });
  }

  // onSelect(album: Album): void {
  //   this.selectedAlbum = album;
  // }
  loadPhoto() {
    this.photoService.getPhoto(this.photoId).subscribe(
      response => {
        this.photo = response;
      },
      error => {
        console.error('Error loading photo:', error);
        // Handle the error as needed
      }
    );
  }

  getPhotoUrl(photoId: number): string {
    // Assuming your API endpoint for getting a photo is '/get-photo/{photoId}'
    return `/get-photo/${photoId}`;
  }

  addAlbum(): void {
    const userId = this.userId;
    this.newAlbum.userId = userId;
    this.albumService.addAlbum(userId, this.newAlbum).subscribe(
      () => {
        console.log('Album added successfully');
        this.loadAlbums(); // Refresh the album list
      },
      error => {
        console.error('Error adding album:', error);
      }
    );
  }

//   updateAlbum(): void {
//     if (this.selectedAlbum) {
//       this.albumService.updateAlbum(this.selectedAlbum.Id, this.newAlbum).subscribe(
//         () => {
//           console.log('Album updated successfully');
//           this.loadAlbums(); // Refresh the album list
//         },
//         error => {
//           console.error('Error updating album:', error);
//         }
//       );
//     }
//   }

//   deleteAlbum(): void {
//     if (this.selectedAlbum) {
//       this.albumService.deleteAlbum(this.selectedAlbum.Id).subscribe(
//         () => {
//           console.log('Album deleted successfully');
//           this.loadAlbums(); // Refresh the album list
//         },
//         error => {
//           console.error('Error deleting album:', error);
//         }
//       );
//     }
//   }
// }
}
