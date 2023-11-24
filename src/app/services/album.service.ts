import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, AlbumDTO, AlbumWithFirstPhoto } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseUrl: string = 'https://localhost:7116/api/album'

  constructor(
    private http: HttpClient
  ) { }

  addAlbum(userId: number, albumDTO: AlbumDTO): Observable<Object> {
    return this.http.post(this.baseUrl + '/add-album', albumDTO)
  }

  getAllAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/get-all-albums/${userId}`)
  }

  getAllPhotos(albumId: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/get-all-photos/${albumId}`)
  }

  updateAlbum(albumId: number, albumDTO: AlbumDTO): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-album/${albumId}`, albumDTO)
  }

  deleteAlbum(albumId: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete-album/${albumId}`)
  }

  getMiniAlbum(userId: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/get-mini-album`)
  }

  getFirstPhoto(albumId: number): Observable<AlbumWithFirstPhoto[]> {
    return this.http.get<AlbumWithFirstPhoto[]>(`${this.baseUrl}/get-first-photo/${albumId}`)
  }

  
}
