import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../models/friend';
import { MiniProfileDTO, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private baseUrl: string = 'https://localhost:7116/api/friend'
  constructor(
    private http: HttpClient
  ) { }


  getFriendRequests(userId: number): Observable<Friend[]>{
    return this.http.get<Friend[]>(this.baseUrl + `/get-all-friend-request/${userId}`);
  }

  acceptFriendRequest(requestId?: number): Observable<Object>{
    return this.http.post(this.baseUrl + `/accept-friend/${requestId}`, { });
  }

  removeFriendRequest(requestId?: number): Observable<Object>{
    return this.http.delete(this.baseUrl + `/reject-friend/${requestId}`);
  }

  getAllFriends(userId: number): Observable<MiniProfileDTO[]>{
    return this.http.get<MiniProfileDTO[]>(this.baseUrl + `/get-all-friends/${userId}`);
  }

}
