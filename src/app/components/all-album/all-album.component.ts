import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Album, AlbumDTO, AlbumWithFirstPhoto } from 'src/app/models/album';
import { SessionService } from 'src/app/services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { NewAlbumModalComponent } from '@components/new-album-modal/new-album-modal.component';

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.css']
})
export class AllAlbumComponent implements OnInit {

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
    private sessionService: SessionService
    
  ){}

  openModal() {
    const dialogRef = this.dialog.open(NewAlbumModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.loadAlbums();  
    this.loadThumbnail();  
  }

  loadAlbums() {
    this.albumService.getAllAlbums(this.userId).subscribe((response: Album[]) => {
      this.albums = response
    });
  }

  loadThumbnail() {
    this.albumService.getFirstPhoto(this.userId).subscribe((response: AlbumWithFirstPhoto[]) => {
      this.thumbnail = response
    });
  }

  // onSelect(album: Album): void {
  //   this.selectedAlbum = album;
  // }

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
