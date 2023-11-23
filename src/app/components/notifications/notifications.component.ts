import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private userId: number = Number(this.sessionService.getUserId());
  // notifications: Notification[] = [];
  // context: any[] = [];

  notifications: any[] = [
    { sender: 'Blessie Balagtas', action: "liked", type: 'photo', read: false },
    { sender: 'John Bernard Tinio', action: "commented on", type: 'post', read: false },
    { sender: 'Jigs Capinpuyan', action: "liked", type: 'post', read: false }
    // Add more notifications as needed
  ];

  ngOnInit() {}

  constructor(
    private sessionService: SessionService,
    private notificationService: NotificationService
  ){
    // this.getNotificationLists(this.userId);
  }
  // getNotificationLists(userId: number) {
  //   this.notificationService.getNotificationLists(userId).subscribe((response: Notification[]) =>{
  //     this.notifications = response;
  //   },
  //   (error) => {
  //       console.error("Error fetching notifications", error);
  //   });
  // }

  markAsRead(notification: any) {
    // Perform actions to mark the notification as read
    // For example, update the 'read' property
    notification.read = true;
  }

  markAsUnread(notification: any) {
    // Perform actions to mark the notification as read
    // For example, update the 'read' property
    notification.read = false;
  }

  deleteNotification(notification: any) {
    // Perform actions to delete a specific notification
    const index = this.notifications.indexOf(notification);
    // if (index !== -1) {
    //     console.log(index)
    //   this.notifications.splice(index, 1);
    // }

    if (this.notifications.length > 0) {
      this.notifications.shift();
  }
  }

  deleteAllNotifications() {
    // Perform actions to delete all notifications
    this.notifications = [];
  }
}
