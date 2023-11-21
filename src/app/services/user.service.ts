import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://localhost:7116/api/authentication'

  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<Object> {
    return this.http.post(this.baseUrl + '/register', user)
  }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(this.baseUrl + '/login', {email, password})
  }

  sendEmail(userId: number, recipientEmail: string): Observable<any>{
    const body = {recipientEmail};
    return this.http.get(`${this.baseUrl}/verify-email/${userId}`, {params: body});
  }


  //USER PROFILE
  
}
