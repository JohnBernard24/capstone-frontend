import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl: string = 'https://localhost:7116/api/notification'

  constructor(
    private http: HttpClient
  ) {
  }


  getNotificationLists(userId: number): Observable<Notification[]>{
    return this.http.get<Notification[]>(this.baseUrl + `/get-notifications/${userId}`);
  }
}
