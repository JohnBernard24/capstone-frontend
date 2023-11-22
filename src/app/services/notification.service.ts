import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl: string = 'https://localhost:7116/api/notification'

  constructor(
    private http: HttpClient
  ) { }

  getAllNotifications(userId: number): Observable<Object>{
    return this.http.get(this.baseUrl + `/get-notifications/${userId}`);
  }

  getNotificationContext(userId: number): Observable<Object> {
    return this.http.get(this.baseUrl + `/get-notification-context/${userId}`);
  }

}
