import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostDTO } from '../models/post';
import { Like, LikeDTO } from '../models/like';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = 'https://localhost:7116/api/post'

  constructor(
    private http: HttpClient
  ) { }

  addPost(userId: number, postDTO: PostDTO): Observable<Object>{
    return this.http.post(this.baseUrl + `/add-post/${userId}`, {userId, postDTO});
  }
  
  updatePost(postId: number, postDTO: PostDTO): Observable<Object>{
    return this.http.put(this.baseUrl + `/update-post/${postId}`, {postId, postDTO});
  }


  deletePost(postId: number): Observable<Object> {
    
    return this.http.delete(this.baseUrl + `/delete-post/${postId}`);
  }


  getPostLikesByPostId(postId: number): Observable<Object> {
    return this.http.get(this.baseUrl + `/get-post-likes/${postId}`);
  }

  likePost(likeDTO: LikeDTO): Observable<Object> {
    return this.http.post(this.baseUrl + 'like-post', {likeDTO});
  }



  
}
