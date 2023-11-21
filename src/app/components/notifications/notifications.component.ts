// notification.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    notifications: any[] = [
        { sender: 'Blessie Balagtas', action: "liked", type: 'photo' },
        { sender: 'John Bernard Tinio', action: "commented on", type: 'post' },
        { sender: 'Jigs Capinpuyan', action: "liked", type: 'post' }
        // Add more notifications as needed
    ];

    ngOnInit() {
        // Initialize or fetch notifications here
    }

    markAsRead(notification: any) {
        // Perform actions to mark the notification as read
        // For example, remove it from the list
        const index = this.notifications.indexOf(notification);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    }

    deleteAllNotifications() {
        // Perform actions to delete all notifications
        this.notifications = [];
    }
}
