import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [
    { sender: 'Blessie Balagtas', action: "liked", type: 'photo', read: false },
    { sender: 'John Bernard Tinio', action: "commented on", type: 'post', read: false },
    { sender: 'Jigs Capinpuyan', action: "liked", type: 'post', read: false }
    // Add more notifications as needed
  ];

  ngOnInit() {
    // Initialize or fetch notifications here
  }

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
