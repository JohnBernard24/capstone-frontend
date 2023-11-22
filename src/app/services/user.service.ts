import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRegisterDTO } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://localhost:7116/api/authentication'

  constructor(
    private http: HttpClient
  ) { }

  register(user: UserRegisterDTO): Observable<Object> {
    return this.http.post(this.baseUrl + '/register', user)
  }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(this.baseUrl + '/login', {email, password})
  }

  sendEmail(userId: number, recipientEmail: string): Observable<Object> {
    return this.http.post(this.baseUrl + `/verify-email`, {userId, recipientEmail});
  }



  //USER PROFILE
  
}
