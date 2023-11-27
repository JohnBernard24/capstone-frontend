import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo, PhotoDTO } from '../models/photo';
import { Observable } from 'rxjs';
import { PostDTO } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { 
  }


  private baseUrl: string = 'https://localhost:7116/api/post'

  addPost(userId: number, postDTO: PostDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-post/${userId}`, postDTO)
  }
}
