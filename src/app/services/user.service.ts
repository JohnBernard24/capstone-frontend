import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EditEmailDTO, EditPasswordDTO, MiniProfileDTO, User, UserRegisterDTO } from '../models/user';
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

  sendEmail(recipientEmail: string): Observable<Object> {
    return this.http.post(this.baseUrl + `authentication/verify-email/${recipientEmail}`, {});
  }

  getProfile(userId: number): Observable<MiniProfileDTO>{
    return this.http.get<MiniProfileDTO>(this.baseUrl + `profile/get-mini-profile/${userId}`);
  }

  getNewsFeedPosts(userId: number): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl + `timeline/get-newsfeed-posts/${userId}`);
  }



  editPassword(editPasswordDTO: EditPasswordDTO): Observable<EditPasswordDTO>{
    return this.http.put(this.baseUrl + "profile/edit-password", editPasswordDTO);
  }

  editEmail(editEmailDTO: EditEmailDTO): Observable<EditEmailDTO>{
    return this.http.put(this.baseUrl + "profile/edit-email", editEmailDTO);
  }
  
}
