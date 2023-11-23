import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MiniProfileDTO, ProfileDTO, User, UserRegisterDTO } from '../models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://localhost:7116/api/'

  constructor(
    private http: HttpClient
  ) {
  }

  register(user: UserRegisterDTO): Observable<Object> {
    return this.http.post(this.baseUrl + 'authentication/register', user)
  }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(this.baseUrl + 'authentication/login', {email, password})
  }

  sendEmail(userId: number, recipientEmail: string): Observable<Object> {
    return this.http.post(this.baseUrl + `authentication/verify-email`, {userId, recipientEmail});
  }

  getProfile(userId: number): Observable<MiniProfileDTO>{
    return this.http.get<MiniProfileDTO>(this.baseUrl + `profile/get-profile/${userId}`);
  }

  getNewsFeedPosts(userId: number): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl + `timeline/get-newsfeed-posts${userId}`);
  }

  editAboutMe(userId: number, profileDTO: ProfileDTO): Observable<ProfileDTO>{
    return this.http.put(this.baseUrl + `profile/edit-about-me/${userId}`, profileDTO);
  }

  
}
