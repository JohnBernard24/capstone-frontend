import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo, PhotoDTO } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  private baseUrl: string = 'https://localhost:7116/api/photo'

  constructor(
    private http: HttpClient
  ) { }

  addPhoto(albumId: number, photoDTO: PhotoDTO): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-photo/${albumId}`, photoDTO)
  }

  deletePhoto(photoId:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete-photo/${photoId}`)
  }
}
